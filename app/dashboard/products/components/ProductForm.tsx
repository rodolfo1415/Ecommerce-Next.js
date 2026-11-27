"use client"

import { Product } from "@/app/api/products/data";
import { saveProduct, updateProduct } from "@/services/products-service";
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type {SyntheticEvent} from "react";

interface Props {
       Product: Product; 
   }

export function ProductForm ({ Product } : Props) {
  //Se crea la constante router la cual usa a useRouter para configurar la navegación
  const router = useRouter(); 

    
function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const productsData = Object.fromEntries(formData);
  console.log('Datos:', productsData);


//Enviar productData al Backend

    // se creó una variable para realizar la petición de agregar o actualizar un producto
    let petition;
    //Si la petición recibe un id igual a 0 se activa el if que se encarga de crear un producto nuevo
    //Evitando los valores que se encuentra dentro de las llaves junto a ...productData
    if (Product.id === 0) {
      petition = saveProduct({
        currency: "MXN",
        rating: 0,
        images: [],
        sold: 0,
        ...productsData,
      } as any);
    }
    //En caso de que la id exista se activa el else el cuál manda a traer la información existente dentro del supabasde
    //para que aparezca en el formulario
     else 
      {
        petition = updateProduct(Product.id, productsData as any);
    }
    //Despues de crear o actualizar, la petición mandara a guardar la nueva información al supabase
    //Y posteriormente de guardar correctamente la información el router.push regresara al usuario a la página de la tabla
    //Y actualizara la imfomación mostrada usando el router.refresh para no actualizar la página manualmente
    petition
    //Cuando la petición contiene la información del producto de forma correcta o esta completa
      .then(() => { 
        alert("Producto guardado");
        router.push("/dashboard/products");
        router.refresh();
      })    
      //Pero en caso de faltar algún parametro la petición regresara un error
      .catch((error) => {
        console.log(error);
        alert(`Error al guardar el Producto: ${error.message}`);
      });
  }
  
  
    return (
    <Form 
      className="flex w-96 flex-col gap-4"
      onSubmit={handleSubmit}>
      <TextField
      isRequired
        //los defaultValue se cargan unicamente si existe un producto en la base de datos 
        //en caso contrario los formularios estaran vacio
        defaultValue={Product.name}
        name="name"
        type="text"
        validate={(value) => {
            if (value.length < 8){
                return "Ingresa el nombre del producto"
            }
            return null;
        }}
      >
        <Label>Nombre</Label>
        <Input placeholder="Nombre" />
        <FieldError />
      </TextField>

      <TextField
      
        isRequired 
        defaultValue={Product.description} 
        name="description"
        type="text"
        validate={(value) => {
            if (value.length < 8){
                return "Ingresa la descripción del producto"
            }
            return null;
        }}
      >
        <Label>Descripción</Label>
        <Input placeholder="Descripción" />
        <FieldError />
      </TextField>

        <TextField
        isRequired 
        defaultValue={Product.brand}
        name="brand"
        type="text"
        validate={(value) => {
            if (value.length < 2){
                return "Ingresa la marca del producto"
            }
            return null;
        }}
      >
        <Label>Marca</Label>
        <Input placeholder="Marca" />
        <FieldError />
      </TextField>      

        <TextField
        isRequired 
        defaultValue={Product.cover}
        name="cover"
        type="text"
        validate={(value) => {
            if (value.length < 8){
                return "Ingresa la url de la imagen del producto"
            }
            return null;
        }}
      >
        <Label>URL de la Imagen</Label>
        <Input placeholder="Imagen" />
        <FieldError />
      </TextField>

        <TextField
        isRequired 
        defaultValue={String(Product.price)}
        name="price"
        type="float"
        validate={(value) => {
            if (value.length < 3){
                return "Ingresa el precio del producto"
            }
            return null;
        }}
      >
        <Label>Precio</Label>
        <Input placeholder="Precio" />
        <FieldError />
      </TextField>


        <TextField
        isRequired 
        defaultValue={String(Product.stock)}
        name="stock"
        type="number"
        validate={(value) => {
            if (value.length < 1){
                return "Ingresa las existencias del producto"
            }
            return null;
        }}
      >
        <Label>Existencias</Label>
        <Input placeholder="Existencias" />
        <FieldError />
      </TextField>


      <div className="flex gap-2">
        <Button type="submit">
          Guardar
        </Button>
        <Button variant="danger">
          <Link href="/dashboard/products">
          Cancelar
          </Link>
        </Button>
      </div>
    </Form>
    )
}