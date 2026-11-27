import { Products } from "@/app/api/products/data";
import { getAllProducts } from "@/services/products-service";
import { Button, Table } from '@heroui/react';
import { Link } from '@heroui/react';

export default async function ProductsPage() {
	
    const productsData = await getAllProducts();
    
    return (
        <main>
            <h2>Productos</h2>
                    
            <Button>
              <Link href="/dashboard/products/new">
                Agregar un Producto
              </Link>
            </Button>

    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column>Imagen</Table.Column>
            <Table.Column isRowHeader>Nombre</Table.Column>
            <Table.Column>Descripción</Table.Column>
            <Table.Column>Marca</Table.Column>
            <Table.Column>Precio</Table.Column>
            <Table.Column>Existencias</Table.Column>
            <Table.Column>Editar</Table.Column>
          </Table.Header>
          <Table.Body>
            {productsData.map((Product) => (
                <Table.Row key={Product.id}>
                    <Table.Cell>
                        <img 
                        src={Product.cover}
                        alt={Product.name}
                        width={100}
                        height={100}
                        className="rounded-xl"
                        />
                    </Table.Cell>
                    <Table.Cell>{Product.name}</Table.Cell>
                    <Table.Cell>{Product.description}</Table.Cell>
                    <Table.Cell>{Product.brand}</Table.Cell>
                    <Table.Cell>{Product.price}{Product.currency}</Table.Cell>
                    <Table.Cell>{Product.stock}</Table.Cell>
                    <Table.Cell>
                      <Link
                       href={`/dashboard/products/${Product.id}/edit`}>
                        Editar
                        <Link.Icon />
                      </Link>
                    </Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
		
        </main>
    )
}
