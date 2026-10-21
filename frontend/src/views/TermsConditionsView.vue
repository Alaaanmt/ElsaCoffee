<script setup lang="ts">
import { useRouter } from 'vue-router'
import { PhArrowLeft } from '@phosphor-icons/vue'
import FadeInObserver from '@/components/ui/FadeInObserver.vue'
import BrandLogo from '@/components/layout/BrandLogo.vue'

const router = useRouter()

const volverAtras = () => {
  router.back()
}
</script>

<template>
  <div class="pt-14 md:pt-20 pb-20 px-5 sm:px-8 max-w-4xl mx-auto min-h-[85vh]">
    <FadeInObserver>
      <!-- Encabezado con Botón Volver y Logo Elsa -->
      <div class="mb-10 relative flex items-center justify-center pb-6 border-b border-borde-suave">
        <button @click="volverAtras"
          class="absolute left-0 inline-flex items-center gap-2 text-sm font-medium text-tinta-suave hover:text-acento transition-colors cursor-pointer">
          <PhArrowLeft :size="18" weight="bold" />
          <span>Volver</span>
        </button>

        <!-- Logo Elsa perfectamente centrado -->
        <BrandLogo variant="normal" />
      </div>
      <!-- Contenido Legal -->
      <article class="prose prose-stone dark:prose-invert max-w-none space-y-6 text-tinta-suave leading-relaxed">
        <header class="space-y-2">
          <span class="text-xs uppercase tracking-[0.2em] font-medium text-verde-marca dark:text-acento block">
            Información Legal
          </span>
          <h1 class="font-titulo text-3xl sm:text-4xl font-semibold text-tinta">
            Términos y Condiciones
          </h1>
          <p class="text-xs text-tinta-suave/80 font-mono">
            Última actualización: 18 de Octubre de 2026
          </p>
        </header>

        <p class="text-sm sm:text-base leading-relaxed text-tinta">
          Bienvenido/a a Elsa Coffee & Wine. Estos Términos y Condiciones regulan el acceso y uso de nuestro sitio web y
          las compras realizadas a través de él. Al utilizar el sitio, el usuario acepta las condiciones aplicables a su
          navegación y, cuando corresponda, a la realización de pedidos.
        </p>

        <section class="space-y-3 pt-4">
          <h2 class="font-titulo text-xl font-semibold text-tinta">1. Identificación del comercio</h2>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Nombre comercial:</strong> Elsa Coffee & Wine.</li>
            <li><strong>Titular legal:</strong> [Completar.]</li>
            <li><strong>Domicilio comercial:</strong> José León Suárez 2015, Mataderos, Ciudad Autónoma de Buenos Aires.
            </li>
            <li><strong>Contacto:</strong> elsa.coffee.ba@gmail.com.</li>
          </ul>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">2. Productos y disponibilidad</h2>
          <p class="text-sm">El sitio permite consultar los productos ofrecidos por Elsa Coffee & Wine, incluidos
            productos de cafetería, pastelería y tortas artesanales.</p>
          <p class="text-sm">Las fotografías son ilustrativas y pueden presentar pequeñas diferencias respecto del
            producto final debido a su elaboración artesanal. La descripción publicada informará las características
            relevantes de cada producto.</p>
          <p class="text-sm">La disponibilidad puede variar. Si un producto solicitado no pudiera elaborarse, nos
            comunicaremos con el cliente para informarle y acordar una solución adecuada.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">3. Precios y pedidos</h2>
          <p class="text-sm">Los precios se expresan en pesos argentinos y corresponden a los valores informados en el
            sitio al momento de realizar la compra.</p>
          <p class="text-sm">Antes de confirmar el pedido, el usuario podrá revisar los productos seleccionados, las
            cantidades, el subtotal, el costo de envío cuando corresponda y el importe total.</p>
          <p class="text-sm">Los pedidos quedan sujetos a su recepción y confirmación por parte del comercio. La
            recepción de una solicitud no implica necesariamente que el pedido haya sido confirmado.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">4. Anticipación y turnos</h2>
          <p class="text-sm">Las tortas y los productos que requieran preparación anticipada deben solicitarse con al
            menos 48 horas de anticipación, de acuerdo con las condiciones informadas en el sitio.</p>
          <p class="text-sm">Los turnos de entrega disponibles se muestran durante el proceso de compra. La fecha y el
            turno seleccionados quedarán sujetos a la confirmación del pedido.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">5. Modalidades de entrega</h2>
          <p class="text-sm">El comercio podrá ofrecer:</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Retiro en sucursal:</strong> el cliente retira el pedido en el domicilio comercial y en el turno
              acordado.</li>
            <li><strong>Envío a domicilio:</strong> sujeto a la cobertura, disponibilidad y tarifa de envío informadas
              durante la compra.</li>
          </ul>
          <p class="text-sm">El cliente debe proporcionar datos correctos y completos para coordinar la entrega. Si la
            dirección es incorrecta o no es posible concretar la entrega por causas atribuibles al cliente, el comercio
            se comunicará para acordar los pasos a seguir.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">6. Medios de pago</h2>
          <p class="text-sm">Los medios de pago disponibles serán los indicados durante el checkout, que podrán incluir
            Mercado Pago, transferencia bancaria y efectivo, según la modalidad habilitada.</p>
          <p class="text-sm">Cuando el pago requiera verificación manual, el pedido podrá permanecer pendiente hasta que
            el comercio confirme la recepción del importe.</p>
          <p class="text-sm">Las instrucciones de pago se comunicarán mediante los canales informados por el comercio.
            El cliente debe verificar que los datos de pago provengan de un canal legítimo de Elsa Coffee & Wine.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">7. Modificaciones y cancelaciones</h2>
          <p class="text-sm">Para solicitar una modificación o cancelación, el cliente deberá comunicarse con el
            comercio mediante los canales de contacto publicados.</p>
          <p class="text-sm">La posibilidad de modificar un pedido dependerá de su estado de preparación y de la
            disponibilidad del comercio. Las condiciones de cancelación, devolución de importes y reembolsos se
            aplicarán de acuerdo con la normativa vigente y las circunstancias de cada caso.</p>
          <p class="text-sm">Nada de lo dispuesto en estos términos limita los derechos irrenunciables que reconoce la
            legislación de defensa del consumidor.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">8. Responsabilidades del usuario</h2>
          <p class="text-sm">El usuario se compromete a proporcionar información veraz, revisar los datos del pedido
            antes de confirmarlo y utilizar el sitio de manera lícita.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">9. Funcionamiento del sitio</h2>
          <p class="text-sm">El comercio procurará mantener el sitio disponible y actualizado, aunque no puede
            garantizar que esté libre de interrupciones, errores técnicos o tareas de mantenimiento.</p>
          <p class="text-sm">Los precios, productos y condiciones podrán actualizarse para futuras compras. Los cambios
            no alterarán retroactivamente las condiciones de pedidos ya confirmados, salvo que corresponda legalmente.
          </p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">10. Protección de datos personales</h2>
          <p class="text-sm">Los datos proporcionados durante la navegación y la compra se tratarán conforme a la
            Política de Privacidad del sitio y a la legislación aplicable en materia de protección de datos personales.
          </p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">11. Legislación aplicable</h2>
          <p class="text-sm">Estos términos se interpretarán conforme a las leyes de la República Argentina, sin afectar
            los derechos que la normativa de protección al consumidor reconoce a los usuarios.</p>
        </section>

        <section class="space-y-3 pt-2 border-t border-borde-suave">
          <h2 class="font-titulo text-xl font-semibold text-tinta">12. Contacto</h2>
          <p class="text-sm">Para realizar consultas sobre estos términos o sobre un pedido, el usuario podrá
            comunicarse mediante los datos de contacto publicados en el sitio web.</p>
        </section>
      </article>
    </FadeInObserver>
  </div>
</template>