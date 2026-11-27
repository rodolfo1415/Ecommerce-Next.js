export interface Product { 
  id: number, 
  name: string,
  description: string, 
  brand: string, 
  images: string[], 
  cover: string, 
  price: number, 
  currency: string, 
  stock: number, 
  rating: number,
  sold: number, 
} 

export const Products: Product[] = [
	{
		id: 1,
		name: "Jersey Cruz Azul Visitante 2026 - 2027",
		description: "Jersey visitante de Cruz Azul que se utilizará durante la temporada 26-27", 
  		brand: "Pirma", 
 	  	images: ["https://www.soccerlord.se/wp-content/uploads/2019/07/Cruz-Azul-Away-Football-Shirt-26-27-600x600.jpg",
			"https://http2.mlstatic.com/D_Q_NP_2X_749182-MLM114213766077_072026-E.webp",
			"https://azul-media-mx.com/cdn/shop/files/b22fcd2556f6d54a130a6f96a937eefb.jpg?v=1784148685&width=1024",
			"https://tse4.mm.bing.net/th/id/OIP.FPEmkTKB9X4qLQBe6IlExQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
			"https://http2.mlstatic.com/D_Q_NP_2X_742990-MLM112918610940_072026-E.webp"
		], 
 	 	cover: "https://www.soccerlord.se/wp-content/uploads/2019/07/Cruz-Azul-Away-Football-Shirt-26-27-600x600.jpg", 
  		price: 1949, 
  		currency: "MXN", 
  		stock: 26, 
  		rating: 4.7,
		sold: 4647
	},

    { 
    	id: 2, 
    	name: "Jersey Cruz Azul local 2026", 
    	description: "El nuevo Jersey Local del Club Cruz Azul para la temporada 2026-2027.", 
    	brand: "Pirma", 
    	images: ["https://http2.mlstatic.com/D_Q_NP_2X_742990-MLM112918610940_072026-E.webp",
        	"https://product-media.cdn.t1.com/product/316981/2026/7/3/0ddc97530fcebed65b93574a71c6d710.jpg",
        	"https://http2.mlstatic.com/D_Q_NP_2X_816919-MLM114616525463_072026-E.webp",
        	"https://http2.mlstatic.com/D_Q_NP_2X_868775-MLM114123579671_072026-E.webp", 
        	"https://www.soccerlord.se/wp-content/uploads/2019/07/Cruz-Azul-Away-Football-Shirt-26-27-600x600.jpg"
    	], 
    	cover: "https://http2.mlstatic.com/D_Q_NP_2X_742990-MLM112918610940_072026-E.webp", 
    	price: 1949, 
    	currency: "MXN", 
    	stock: 19, 
    	rating: 4.3,
		sold: 4567 
  },

    { 
    	id: 3, 
    	name: "Jersey Barcelona visitante 2026", 
    	description: "Jersey del futbol club Barcelona Visitante versión jugador", 
    	brand: "Nike", 
    	images: ["https://theshoppies.pk/wp-content/uploads/2023/03/Barcelona-Away-Jersey-2026-27.jpg",
        	"https://tse4.mm.bing.net/th/id/OIP.MAv4KjAZCItRbXr6GaImZwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIiBWJY9MlE6iRJ1cw2Hf9hr70BlckHts_xxij7Cuoz2ClYr9p-ZY-r4HRoOBBZrDGH4lw-wM3J7bqoboSbVYDo83AN6zmOnkXy-e5dWMwCQh7FerIeJHj24bn_Rwea4cbT3f2UbTPn88brfJRAYUkO_LKCo05w3o8Bsxq6tYcTtHWbQB8raKrB9qVA_4/s1600/se-ha-presentado-la-camiseta-visitante-del-fc-barcelona-26-27-de-nike-mamba.jpg",
        	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd-uunG7DZO87HqtjiJIEsXjaJnXwMfSk4NdVuhXpDsDBO3p7uxPbAjd7R9Fkkk-tpjCQMkhOqzsLx1lexTSoHURstLFoEj2jVoMDgtT3YIH4cfVaPxtw9iTIGznqD5Rskz5j6YLwS7IEnjY3KneSvz7UmDRDgfLLHJExyBXdd0lZhzobPI_OUWraIvn0/s600/barca%2026%2027%20away%20kit%20(4).jpg", 
        	"https://kikefoot.com/wp-content/uploads/2026/10/transparent-87-1200x1200.jpg"
    	], 
    	cover: "https://theshoppies.pk/wp-content/uploads/2023/03/Barcelona-Away-Jersey-2026-27.jpg", 
    	price: 1799, 
    	currency: "MXN", 
    	stock: 29, 
    	rating: 4.9,
		sold: 4927 
  },

    { 
    	id: 4, 
    	name: "Jersey Arsenal local 2026", 
    	description: "Jersey del futbol club deportivo Arsenal local 2026 - 2027", 
    	brand: "Adidas", 
    	images: ["https://tse1.mm.bing.net/th/id/OIP.nX87mjBWG7G02H8JrjyrvAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        	"https://tse4.mm.bing.net/th/id/OIP.eMrYfTTHpxkoo_b7cxKfxgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikYFE4j7z8QJtIayLaM_q2KEe50AP7VXiOtdploE6SjPGrV3G5dxRV5NhGfG_ZwWNJSxq8H3789a8cthT9DivEnLkABmuTDiQkhjeJs4SgmRE_H6Hb8wsrozxu6vrDRYagCE9RxHrQ0JNNyYxIGxDvyrcKcooPN5QHvHB6HN6AsRN_DlZ-6f6vCZmaro9n/s1600/lanzamiento-de-la-camiseta-local-25-26-del-arsenal-debut-en-el-campo.jpg",
        	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKcnlAglMkVbgmC4UyuNoImhIC0sWHz3hSkTD7S1mlchZ2C3J_hQDY8_5KWPbHemHZiYwX_BhpnSEKB_0DdEYLAOvjI1GZAVq6NRmRNZYTE0WT1NqK1Vh4WTqGzC7vUS9Ik53xCHf5ynziN5zn_nebWleu75n1hFnrBEB2y-mya4PuiZtbMDu53RyZIcUv/s1600/sortie-du-maillot-domicile-25-26-d-arsenal-debuts-sur-le-terrain.jpg", 
        	"https://down-id.img.susercontent.com/file/id-11134207-822wu-mp0z3j07ez2n3c"
    	], 
    	cover: "https://tse1.mm.bing.net/th/id/OIP.nX87mjBWG7G02H8JrjyrvAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
    	price: 1699, 
    	currency: "MXN", 
    	stock: 17, 
    	rating: 4.1,
		sold: 3297 
  },

    { 
    	id: 5, 
    	name: "Jersey Japón local 2026", 
    	description: "Jersey de la selección japonesa de fútbol local copa mundial 2026", 
    	brand: "Adidas", 
    	images: ["https://cdn11.bigcommerce.com/s-mf8nk5mp4s/images/stencil/1280x1280/products/11988/15434/www.imagehandler__00956.1763694001.jpg?c=2",
        	"https://authenticworldd.com/cdn/shop/files/6_e1869565-8f76-4e85-b434-57e680b2673d.webp?v=1766763915&width=1445",
        	"https://aztecasoccer.com/cdn/shop/files/adidas-mens-japan-world-cup-2026-home-jersey-blue-crest.jpg?v=1776192217&width=322",
        	"https://tse1.mm.bing.net/th/id/OIP.auSZ_ivIOfDRxk6u6jcCPQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
        	"https://jersylab.com/wp-content/uploads/2026/01/japan-2026-away-jersey-fan-version-1-768x768.jpg"
    	], 
    	cover: "https://cdn11.bigcommerce.com/s-mf8nk5mp4s/images/stencil/1280x1280/products/11988/15434/www.imagehandler__00956.1763694001.jpg?c=2", 
    	price: 1899, 
    	currency: "MXN", 
    	stock: 25, 
    	rating: 4.9,
		sold: 7829 
  },

    { 
    	id: 6, 
    	name: "Jersey Brasil local copa del mundo 2026", 
    	description: "Jersey Local de la selección brasileña de fútbol para la copa del mundo de 2026.", 
    	brand: "Nike", 
    	images: ["https://soccerwearhouse.com/cdn/shop/files/nike-mens-brazil-home-stadium-jersey-2026-canaryteal-soccerwearhouse-4294154_1000x.png?v=1777939808",
        	"https://nikeco.vtexassets.com/arquivos/ids/1004808/IF7054-724_A.jpg?v=639149932464100000",
        	"https://http2.mlstatic.com/D_NQ_NP_619040-MLC110421163637_042026-O.webp",
        	"https://www.innovasport.com/medias/1200Wx1200H-NEW-media-gallery-000000000000408596-10-20260525134710.jpg?context=bWFzdGVyfGltYWdlc3w0OTYxNHxpbWFnZS9qcGVnfGFEUTNMMmcwWlM4eU9ERXhNRFV5TkRRME9EYzVPQzh4TWpBd1YzZ3hNakF3U0Y5T1JWZGZiV1ZrYVdGZloyRnNiR1Z5ZVY4d01EQXdNREF3TURBd01EQTBNRGcxT1RaZk1UQmZNakF5TmpBMU1qVXhNelEzTVRBdWFuQm58Y2Y0MWE1NDQ1MzM0M2I3NDY0NDc1ZTdhNWE5NTc0OTBiMTJiNzdmZWQ2ZDZjZjFiZjIwNTY4NGM3MmQwZjRjNA", 
        	"https://tse3.mm.bing.net/th/id/OIP.qVbF5SiYy1_Gm4W650t4EQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    	], 
    	cover: "https://soccerwearhouse.com/cdn/shop/files/nike-mens-brazil-home-stadium-jersey-2026-canaryteal-soccerwearhouse-4294154_1000x.png?v=1777939808", 
    	price: 1799, 
    	currency: "MXN", 
    	stock: 32, 
    	rating: 4.4,
		sold: 5672
  },
	
];