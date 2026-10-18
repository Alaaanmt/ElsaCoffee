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

        <BrandLogo variant="normal" />
      </div>

      <!-- Contenido de Privacidad -->
      <article class="prose prose-stone dark:prose-invert max-w-none space-y-6 text-tinta-suave leading-relaxed">
        <header class="space-y-2">
          <span class="text-xs uppercase tracking-[0.2em] font-medium text-verde-marca dark:text-acento block">
            Protección de Datos
          </span>
          <h1 class="font-titulo text-3xl sm:text-4xl font-semibold text-tinta">
            Política de Privacidad
          </h1>
          <p class="text-xs text-tinta-suave/80 font-mono">
            Última actualización: 18 de Octubre de 2026
          </p>
        </header>

        <p class="text-sm sm:text-base leading-relaxed text-tinta">
          En Elsa Coffee & Wine respetamos la privacidad de las personas que visitan nuestro sitio web y realizan pedidos. Esta política explica qué información podemos recopilar, con qué finalidad la utilizamos y qué derechos tienen sus titulares.
        </p>

        <section class="space-y-3 pt-4">
          <h2 class="font-titulo text-xl font-semibold text-tinta">1. Responsable del tratamiento</h2>
          <p class="text-sm">El responsable del tratamiento de los datos personales es Silvio Martin Thomas, correspondiente al comercio Elsa Coffee & Wine.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Domicilio:</strong> José León Suárez 2015, Mataderos, Ciudad Autónoma de Buenos Aires.</li>
            <li><strong>Contacto para consultas de privacidad:</strong> elsa.coffee.ba@gmail.com.</li>
          </ul>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">2. Datos que podemos recopilar</h2>
          <p class="text-sm">Según las funciones utilizadas, podemos recopilar:</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Datos de identificación:</strong> nombre y apellido.</li>
            <li><strong>Datos de contacto:</strong> email y número de teléfono.</li>
            <li><strong>Datos de entrega:</strong> domicilio, código postal, localidad e indicaciones necesarias para entregar un pedido.</li>
            <li><strong>Datos de compra:</strong> productos solicitados, cantidades, importes, fecha, turno, modalidad de entrega y estado del pedido.</li>
            <li><strong>Información de comunicación:</strong> mensajes o consultas enviados al comercio.</li>
            <li><strong>Datos técnicos:</strong> información que pudiera generar la infraestructura del sitio, como registros técnicos o datos de navegación.</li>
          </ul>
          <p class="text-sm">Solo deben solicitarse los datos necesarios para la finalidad correspondiente.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">3. Finalidades del tratamiento</h2>
          <p class="text-sm">Utilizamos los datos personales para:</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li>Recibir, gestionar y confirmar pedidos.</li>
            <li>Coordinar el retiro o envío de productos.</li>
            <li>Informar sobre el estado de una compra y resolver consultas.</li>
            <li>Verificar pagos cuando corresponda.</li>
            <li>Mantener el historial operativo y administrativo de los pedidos.</li>
            <li>Prevenir usos indebidos y atender obligaciones legales aplicables.</li>
          </ul>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">4. Pagos</h2>
          <p class="text-sm">Los medios de pago habilitados pueden incluir Mercado Pago, transferencia bancaria y efectivo.</p>
          <p class="text-sm">Cuando se utiliza una plataforma de pagos externa, el procesamiento de la operación puede quedar sujeto a las condiciones y políticas de privacidad de ese proveedor.</p>
          <p class="text-sm">Elsa Coffee & Wine no solicita ni almacena contraseñas bancarias, claves de seguridad ni datos completos de tarjetas fuera de los mecanismos autorizados para procesar pagos.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">5. Comunicación de datos a terceros</h2>
          <p class="text-sm">Los datos podrán ser tratados por proveedores tecnológicos que resulten necesarios para operar el sitio, alojar sus servicios, gestionar comunicaciones o procesar pagos, en la medida en que dichos proveedores se encuentren efectivamente utilizados.</p>
          <p class="text-sm">También podrán comunicarse cuando exista una obligación legal válida o resulte necesario para atender una solicitud legítima de una autoridad competente.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">6. Conservación y seguridad</h2>
          <p class="text-sm">Los datos se conservarán durante el tiempo necesario para gestionar los pedidos, atender reclamos y cumplir las obligaciones legales aplicables.</p>
          <p class="text-sm">El comercio adoptará medidas de seguridad razonables y adecuadas a los datos tratados para prevenir accesos, modificaciones, pérdidas o divulgaciones no autorizadas.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">7. Derechos de los titulares</h2>
          <p class="text-sm">Las personas podrán solicitar información sobre sus datos personales y, cuando corresponda, requerir su actualización, rectificación o supresión, de acuerdo con la legislación vigente.</p>
          <p class="text-sm">Para ejercer estos derechos, podrán comunicarse mediante email a elsa.coffee.ba@gmail.com, indicando el motivo de la solicitud.</p>
          <p class="text-sm">La Agencia de Acceso a la Información Pública, en su carácter de autoridad de control en materia de protección de datos personales en Argentina, recibe consultas y reclamos dentro de sus competencias legales.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">8. Cookies y tecnologías similares</h2>
          <p class="text-sm">El sitio podrá utilizar cookies o tecnologías similares cuando sean necesarias para su funcionamiento o cuando se incorporen herramientas que las requieran.</p>
        </section>

        <section class="space-y-3 pt-2">
          <h2 class="font-titulo text-xl font-semibold text-tinta">9. Enlaces externos</h2>
          <p class="text-sm">El sitio puede incluir enlaces a plataformas de terceros, como servicios de pago o WhatsApp. El uso de esos servicios se rige también por sus propias condiciones y políticas de privacidad.</p>
        </section>

        <section class="space-y-3 pt-2 border-t border-borde-suave pt-6">
          <h2 class="font-titulo text-xl font-semibold text-tinta">10. Contacto</h2>
          <p class="text-sm">Para realizar consultas sobre el tratamiento de datos personales, escribir a elsa.coffee.ba@gmail.com.</p>
        </section>
      </article>
    </FadeInObserver>
  </div>
</template>