import type { Component } from 'vue'
import {
  PhCoffee,
  PhEgg,
  PhCookingPot,
  PhCookie,
  PhMartini,
  PhBowlFood,
  PhBeerBottle
} from '@phosphor-icons/vue'

export interface MenuItem {
  nombre: string
  descripcion?: string
  precio: string
  badge?: string
}

export interface MenuCategoria {
  id: string
  titulo: string
  subtitulo: string
  icono: Component
  items: MenuItem[]
}

export const categoriasMenu: MenuCategoria[] = [
  {
    id: 'cafeteria',
    titulo: 'Cafetería',
    subtitulo: 'Cafés clásicos, infusiones y chocolate.',
    icono: PhCoffee,
    items: [
      { nombre: 'Pocillo', descripcion: 'Espresso suave y cremoso', precio: '$4.200' },
      { nombre: 'Americano', precio: '$4.500' },
      { nombre: 'Descafeinado', precio: '$4.500' },
      { nombre: 'Jarrito', descripcion: 'Cortado o lágrima', precio: '$4.800' },
      { nombre: 'Café con leche', precio: '$5.100' },
      { nombre: 'Café doble', precio: '$5.200' },
      { nombre: 'Lágrima doble', precio: '$5.200' },
      { nombre: 'Latte', precio: '$5.200' },
      { nombre: 'Flat white', precio: '$5.500' },
      { nombre: 'Tazón', descripcion: 'Café con leche o lágrima', precio: '$5.800' },
      { nombre: 'Tazón Elsa', descripcion: 'Café con leche o lágrima', precio: '$6.500' },
      { nombre: 'Capuccino', descripcion: 'Con canela y chocolate rallado', precio: '$7.800' },
      { nombre: 'Capuccino italiano', descripcion: 'Con canela, chocolate rallado y crema batida', precio: '$8.500' },
      { nombre: 'Bombón', descripcion: 'Leche condensada, 2 shots de café y crema batida', precio: '$8.500' },
      { nombre: 'Submarino', precio: '$7.500' },
      { nombre: 'Té / mate cocido', descripcion: 'Consultar por los tés saborizados', precio: '$4.000' },
      { nombre: 'Chocolatada', precio: '$4.000' },
    ],
  },
  {
    id: 'lattes',
    titulo: 'Lattes',
    subtitulo: 'Sabores especiales, calientes o fríos.',
    icono: PhCoffee,
    items: [
      { nombre: 'Vainilla / Avellana', descripcion: 'Syrup de vainilla o avellana, leche, shot de café y espuma', precio: '$8.000' },
      { nombre: 'Caramelo / Salted caramel', descripcion: 'Syrup de caramelo, leche, shot de café y espuma', precio: '$8.200' },
      { nombre: 'Pistacho', descripcion: 'Salsa de pistacho, leche, shot de café y espuma', precio: '$8.500' },
      { nombre: 'Moca negro o blanco', descripcion: 'Salsa de chocolate, leche, shot de café y espuma', precio: '$8.500' },
      { nombre: 'Elsa Nutt', descripcion: 'Nutella, leche, shot de café y crema batida', precio: '$8.600' },
    ],
  },
  {
    id: 'desayunos',
    titulo: 'Desayunos y meriendas',
    subtitulo: 'Combos para empezar el día o hacer una pausa.',
    icono: PhEgg,
    items: [
      { nombre: 'Clásico', descripcion: 'Infusión + 2 facturas a elección', precio: '$7.500' },
      { nombre: 'De campo', descripcion: 'Infusión + 2 tostadas con queso crema, mermelada, dulce de leche y manteca', precio: '$11.000' },
      { nombre: 'Salado', descripcion: 'Infusión + tostada con palta, huevo y mini exprimido', precio: '$16.000' },
      { nombre: 'Elsa Fit', descripcion: 'Infusión + yogurt con granola casera, frutas de estación y miel', precio: '$15.000' },
      { nombre: 'Team salado', descripcion: 'Infusión + tostado árabe de jamón cocido y queso', precio: '$15.000' },
    ],
  },
  {
    id: 'tostados',
    titulo: 'Tostados y sándwiches',
    subtitulo: 'Opciones saladas para cualquier momento.',
    icono: PhCookingPot,
    items: [
      { nombre: 'Jamón y queso', descripcion: 'Pan de miga o pan de campo', precio: '$13.000' },
      { nombre: 'Capresse', descripcion: 'Pan árabe, queso tybo, tomate y albahaca', precio: '$13.800' },
      { nombre: 'Crudo y queso', descripcion: 'Con manteca', precio: '$13.800' },
      { nombre: 'Medialuna rellena', descripcion: 'De jamón cocido y queso tybo', precio: '$5.200' },
      { nombre: 'Croissant', descripcion: 'Jamón cocido y queso tybo', precio: '$12.000' },
      { nombre: 'Croissant crudo', descripcion: 'Jamón crudo, queso crema, rúcula y cherries confitados', precio: '$14.500' },
      { nombre: 'Brioché de lomito', descripcion: 'Cheddar y huevo a la plancha', precio: '$14.300' },
      { nombre: 'Chipá Lovers', descripcion: 'Con jamón cocido y queso tybo', precio: '$13.500' },
      { nombre: 'Scon de parmesano', descripcion: 'Con jamón cocido y queso tybo', precio: '$7.000' },
      { nombre: 'Tortita rellena', descripcion: 'Tortita negra rellena de jamón crudo, queso tybo, rúcula y tomate', precio: '$7.500' },
      { nombre: 'Ciabatta de crudo', descripcion: 'Jamón crudo, queso tybo, cherrys, confitados, rúcula y queso crema', precio: '$16.000' },
      { nombre: 'Ciabatta de pollo', descripcion: 'Pollo grillé, cheddar, cebolla caramelizada, papa rosty, rúcula, cherrys confitados y queso crema', precio: '$18.500' },
      { nombre: 'Salmón', descripcion: 'Pan Briché, salmón ahumado, rúcula, queso crema y palta', precio: '$16.000' }
    ],
  },
  {
    id: 'panaderia',
    titulo: 'Panadería',
    subtitulo: 'Facturas, laminados y clásicos de elaboración propia.',
    icono: PhCookie,
    items: [
      { nombre: 'Medialunas 100% manteca', descripcion: 'Medialunas de manteca', precio: '$2.000' },
      { nombre: 'Facturas tradicionales', descripcion: 'Con pastelera, membrillo o dulce de leche', precio: '$2.400' },
      { nombre: 'Croissant', precio: '$6.500' },
      { nombre: 'Scon de parmesano', precio: '$5.000' },
      { nombre: 'Chipá', precio: '$1.900' },
      { nombre: 'Alfajor de chocolate', precio: '$5.500' },
      { nombre: 'Alfajor sablé', descripcion: 'De almendras o pistacho, relleno de dulce de leche', precio: '$5.500' },
      { nombre: 'Cookies', descripcion: 'Vainilla y chips / red velvet / cacao y Nutella', precio: '$6.500' },
      { nombre: 'Budín', descripcion: 'Consultar sabores', precio: '$5.500' },
      { nombre: 'Cuadraditos', descripcion: 'Brownie o coco y dulce de leche', precio: '$6.000' },
      { nombre: 'Roll canela y manzana', precio: '$6.800' },
      { nombre: 'Cañoncito XL', precio: '$5.200' },
      { nombre: 'Palmerita XL', precio: '$5.000' },
      { nombre: 'Tostadas con dip', descripcion: 'Pan blanco o integral con queso crema y mermelada, dulce de leche y manteca', precio: '$6.500' },
    ],
  },
  {
    id: 'pasteleria',
    titulo: 'Pastelería',
    subtitulo: 'Tortas y porciones de elaboración artesanal.',
    icono: PhCookie,
    items: [
      { nombre: 'Matilda', descripcion: 'Bizcocho de chocolate, dulce de leche y ganache de chocolate', precio: '$14.000' },
      { nombre: 'Elsa', descripcion: 'Marquise de chocolate, dulce de leche y merengue italiano', precio: '$14.000' },
      { nombre: 'Red velvet', descripcion: 'Bizcocho de vainilla y cream cheese', precio: '$14.000' },
      { nombre: 'Cheesecake de frutos rojos', precio: '$13.500' },
      { nombre: 'León blanco', descripcion: 'Bizcocho de limón, cream cheese y frutos rojos', precio: '$14.000' },
      { nombre: 'Chocoframbuesa', descripcion: 'Bizcocho de chocolate, pasta de avellanas y frambuesas', precio: '$14.000' },
      { nombre: 'Crumble de manzana', precio: '$13.500' },
      { nombre: 'Clásica de ricotta', precio: '$8.500' },
    ],
  },
  {
    id: 'brunch',
    titulo: 'Brunch Elsa',
    subtitulo: 'Una propuesta para compartir entre tres personas.',
    icono: PhEgg,
    items: [
      {
        nombre: 'Brunch Elsa',
        descripcion: '3 infusiones; degustación de tortas; alfajor de chocolate o sablé; 4 sándwiches de miga; cuadradito dulce; chipá de tomate, jamón crudo y queso tybo; chipá de lomito y cheddar; 2 chipás; 3 mini exprimidos.',
        precio: '$60.000',
        badge: 'Para 3 personas',
      },
    ],
  },
  {
    id: 'bruschettas',
    titulo: 'Bruschettas',
    subtitulo: 'Tostadas especiales con ingredientes frescos.',
    icono: PhCookingPot,
    items: [
      { nombre: 'Avocado toast', descripcion: 'Queso crema, palta fresca y huevo', precio: '$14.000' },
      { nombre: 'Jamón crudo', descripcion: 'Queso crema, rúcula, cherries confitados y batatas crocantes', precio: '$16.500' },
      { nombre: 'Hummus', descripcion: 'Pan tostado, hummus de garbanzos, huevos revueltos y cherries', precio: '$14.000' },
    ],
  },

  {
    id: 'ejecutivo',
    titulo: 'Menú Ejecutivo',
    subtitulo: 'De 12 a 15 hs. Incluye bebida y café ($17.300).',
    icono: PhCookingPot,
    items: [
      {
        nombre: 'Tarta del Día',
        descripcion: 'Con mix de verdes y tomate',
        precio: '$17.300',
        badge: 'Incluye bebida y café'
      },
      {
        nombre: 'Ensalada Caesar',
        descripcion: 'Mix de verdes, pollo grillé, parmesano, crutones y aderezo caesar',
        precio: '$17.300',
        badge: 'Incluye bebida y café'
      },
      {
        nombre: 'Tostón de Crudo',
        descripcion: 'Queso crema, rúcula, cherrys confitados y batatas crocantes',
        precio: '$17.300',
        badge: 'Incluye bebida y café'
      },
      {
        nombre: 'Wrap Caesar',
        descripcion: 'Pollo grillé, queso parmesano, hojas verdes y aderezo caesar (con papitas)',
        precio: '$17.300',
        badge: 'Incluye bebida y café'
      }
    ]
  },
  {
    id: 'especiales',
    titulo: 'Especiales',
    subtitulo: 'Desayunos y meriendas para darse un gusto.',
    icono: PhEgg,
    items: [
      { nombre: 'Yogurt', descripcion: 'Con frutas de estación, granola y miel', precio: '$11.800' },
      { nombre: 'Blinis', descripcion: 'Con Nutella, banana y crema batida', precio: '$15.000' },
      { nombre: 'Blinis con frutas', descripcion: 'Frutas de estación y miel', precio: '$14.500' },
      { nombre: 'Tostadas francesas', descripcion: 'Con frutas de estación, miel y crema batida', precio: '$14.500' },
      { nombre: 'Croissant dulce', descripcion: 'Nutella y banana / pastelera y frutilla', precio: '$14.500' },
    ],
  },
  {
    id: 'mas-opciones',
    titulo: 'Más Opciones',
    subtitulo: 'Platos principales y opciones adicionales.',
    icono: PhCookingPot,
    items: [
      {
        nombre: 'Omelette',
        descripcion: 'Queso y tomate o jamón y queso',
        precio: '$13.500',
      },
      {
        nombre: 'Pollo Capresse',
        descripcion: 'Pechuga grillé, con tomate, queso y ensalada',
        precio: '$15.500',
      },
      {
        nombre: 'Croissant Relleno',
        descripcion: 'Con queso crema, palta, huevos revueltos y mix de semillas',
        precio: '$14.000',
      },
      {
        nombre: 'Tartas',
        descripcion: 'Jamón y queso, verdura, cebolla y queso o choclo',
        precio: '$12.500',
      },
    ],
  },
  {
    id: 'ensaladas',
    titulo: 'Ensaladas',
    subtitulo: 'Opciones frescas, livianas y nutritivas.',
    icono: PhBowlFood,
    items: [
      { nombre: 'Caesar', descripcion: 'Mix de verdes, pollo grillé, parmesano, crutones y aderezo caesar', precio: '$16.000' },
      { nombre: 'Atún', descripcion: 'Mix de verdes, lomo de atún, cebolla caramelizada, morrón asado, queso tybo y tomate', precio: '$17.000' },
      { nombre: 'Agridulce', descripcion: 'Mix de verdes, peras en almíbar, queso roquefort, cherrys confitados, frutos secos y reducción de aceto', precio: '$17.000' },
      { nombre: 'Salmón ahumado', descripcion: 'Mix de verdes, cebolla caramelizada, palta, cherrys, almendras y mix de semillas', precio: '$18.500' },
    ],
  },
  {
    id: 'bebidas',
    titulo: 'Bebidas',
    subtitulo: 'Jugos naturales, gaseosas y bebidas sin alcohol.',
    icono: PhMartini,
    items: [
      { nombre: 'Exprimido de naranja', precio: '$7.000' },
      { nombre: 'Licuados', descripcion: 'Banana, frutilla, naranja o durazno', precio: '$7.600' },
      { nombre: 'Limonada / naranjada', descripcion: 'Con menta y jengibre', precio: '$7.000' },
      { nombre: 'Gaseosa', precio: '$4.500' },
      { nombre: 'Lata Schweppes', precio: '$3.300' },
      { nombre: 'Agua saborizada', precio: '$3.500' },
      { nombre: 'Agua con o sin gas', precio: '$3.300' },
    ],
  },
  {
    id: 'alcohol',
    titulo: 'Con Alcohol',
    subtitulo: 'Bebidas con alcohol.',
    icono: PhBeerBottle,
    items: [
      { nombre: 'Copa de vino', precio: '$7.300' },
      { nombre: 'Aperol Spritz', precio: '$8.500' },
      { nombre: 'Campari tonic/spritz', precio: '$8.500' },
      { nombre: 'Porrón cerveza', precio: '$7.000' },
      { nombre: 'Cinzano', precio: '$6.500' }
    ],
  },
]
