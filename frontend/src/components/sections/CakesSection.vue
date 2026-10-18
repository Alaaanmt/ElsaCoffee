<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  PhArrowRight,
  PhCaretLeft,
  PhCaretRight,
} from '@phosphor-icons/vue'

// Importación de Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'

import FadeInObserver from '@/components/ui/FadeInObserver.vue'
import { tortasCompletas } from '@/data/cakes'

const router = useRouter()
const modules = [Navigation, FreeMode]
const swiperInstance = ref<SwiperType | null>(null)

const tortasDestacadas = tortasCompletas

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

const irACarta = () => {
  router.push('/tortas')
}

const scroll = (direction: 'left' | 'right') => {
  if (!swiperInstance.value) return
  if (direction === 'left') {
    swiperInstance.value.slidePrev()
  } else {
    swiperInstance.value.slideNext()
  }
}
</script>

<template>
  <section
    id="tortas"
    class="border-y border-borde-suave bg-superficie py-20 transition-colors duration-500 md:py-28"
  >
    <!-- Contenedor alineado con el resto del sitio -->
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <FadeInObserver>
        
        <!-- Bloque Principal: desde md (tablet) se comporta como desktop -->
        <div class="grid grid-cols-1 gap-10 md:flex md:flex-col md:items-center md:text-center">
          
          <!-- Presentación: centrada desde tablet (md:) -->
          <div class="space-y-6 md:max-w-3xl">
            <div>
              <span class="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-verde-marca dark:text-acento">
                Nuestras especialidades
              </span>
              <h2 class="font-titulo text-4xl font-semibold leading-[1.12] tracking-tight text-tinta sm:text-5xl">
                El arte de la <span class="font-normal italic">pastelería.</span>
              </h2>
            </div>
            <p class="max-w-md font-cuerpo text-base leading-relaxed text-tinta-suave md:mx-auto md:text-lg">
              Tortas artesanales elaboradas con dedicación, para compartir algo especial en cada ocasión.
            </p>
            <p class="text-sm text-tinta-suave">
              Encargá tu torta con 48 horas de anticipación.
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-1 md:justify-center">
              <button
                type="button"
                @click="irACarta"
                class="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-verde-marca px-6 py-3.5 text-sm font-semibold text-crema shadow-sm transition-all hover:bg-acento hover:text-verde-marca"
              >
                <span>Descubrir las tortas</span>
                <PhArrowRight :size="17" weight="bold" class="transition-transform group-hover:translate-x-1" />
              </button>

              <!-- Flechitas de navegación: oculta en mobile (hidden), visibles desde sm (sm:flex) -->
              <div class="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  aria-label="Ver tortas anteriores"
                  @click="scroll('left')"
                  class="flex size-10 cursor-pointer items-center justify-center rounded-full border border-borde-suave bg-fondo text-tinta transition-colors hover:border-verde-marca dark:hover:border-acento"
                >
                  <PhCaretLeft :size="19" weight="bold" />
                </button>
                <button
                  type="button"
                  aria-label="Ver más tortas"
                  @click="scroll('right')"
                  class="flex size-10 cursor-pointer items-center justify-center rounded-full border border-borde-suave bg-fondo text-tinta transition-colors hover:border-verde-marca dark:hover:border-acento"
                >
                  <PhCaretRight :size="19" weight="bold" />
                </button>
              </div>
            </div>
          </div>

          <!-- Video de la Torta -->
          <div class="min-w-0 md:order-3 md:w-full md:pt-6">
            <button
              type="button"
              @click="irACarta"
              aria-label="Descubrir nuestras tortas"
              class="group relative block w-full cursor-pointer overflow-hidden rounded-3xl bg-fondo text-left shadow-sm"
            >
              <video
                src="/media/video-torta.mp4"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                aria-label="Vista de una torta artesanal desde distintos ángulos"
                class="aspect-[5/4] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[16/9] lg:aspect-[21/9]"
              >
                Tu navegador no admite la reproducción de video.
              </video>
              <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"></div>
              <div class="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Hecho con dedicación
                </span>
                <h3 class="font-titulo text-2xl font-semibold text-white sm:text-4xl">
                  Un antojo que se disfruta con la mirada.
                </h3>
              </div>
            </button>
          </div>

          <!-- Carrusel Swiper de Tortas -->
          <div class="min-w-0 md:order-2 md:w-full md:pt-4">
            <Swiper
              :modules="modules"
              :slides-per-view="'auto'"
              :space-between="20"
              :free-mode="true"
              :grab-cursor="true"
              @swiper="onSwiper"
              class="w-full !pb-2"
            >
              <SwiperSlide
                v-for="torta in tortasDestacadas"
                :key="torta.id"
                class="!w-[76%] sm:!w-[46%] md:!w-[32%] lg:!w-[28%]"
              >
                <button
                  type="button"
                  @click="irACarta"
                  :aria-label="`Conocer ${torta.nombre}`"
                  class="group w-full text-left"
                >
                  <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-fondo">
                    <img
                      :src="torta.imagen"
                      :alt="torta.nombre"
                      loading="lazy"
                      class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
                    <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 class="font-titulo text-2xl font-semibold text-white sm:text-3xl">
                        {{ torta.nombre }}
                      </h3>
                      <div class="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                        <span>Descubrir</span>
                        <PhArrowRight :size="15" weight="bold" />
                      </div>
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            </Swiper>
            
            <p class="mt-3 text-center text-xs text-tinta-suave">
              Deslizá o arrastrá para descubrir más
            </p>
          </div>

        </div>

      </FadeInObserver>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  overflow: hidden;
}
</style>