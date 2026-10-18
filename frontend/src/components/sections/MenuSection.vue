<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { categoriasMenu, type MenuCategoria } from '@/data/menu'
import imgTorta from '@/assets/img/torta-franui.png'
import imgTortita from '@/assets/img/tortita-negra-sandwich.png'
import FadeInObserver from '@/components/ui/FadeInObserver.vue'
import {
  PhCaretLeft,
  PhCaretRight,
} from '@phosphor-icons/vue'

const categoriaActiva = ref(categoriasMenu[0]?.id ?? 'cafeteria')
const paginaActual = ref(1)

const ITEMS_POR_PAGINA = 5

const categoriaSeleccionada = computed<MenuCategoria>(() => {
  return (
    categoriasMenu.find((cat) => cat.id === categoriaActiva.value) ??
    categoriasMenu[0]!
  )
})

const totalPaginas = computed(() =>
  Math.max(
    1,
    Math.ceil(
      categoriaSeleccionada.value.items.length / ITEMS_POR_PAGINA,
    ),
  ),
)

const itemsPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * ITEMS_POR_PAGINA

  return categoriaSeleccionada.value.items.slice(
    inicio,
    inicio + ITEMS_POR_PAGINA,
  )
})

watch(categoriaActiva, () => {
  paginaActual.value = 1
})

function cambiarPagina(direccion: 'anterior' | 'siguiente') {
  const siguiente =
    paginaActual.value + (direccion === 'siguiente' ? 1 : -1)

  if (siguiente >= 1 && siguiente <= totalPaginas.value) {
    paginaActual.value = siguiente
  }
}
</script>

<template>
  <section
    id="carta"
    class="bg-fondo py-24 transition-colors duration-500 md:py-32"
  >
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <FadeInObserver>
        <!-- Encabezado -->
        <header class="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <span
            class="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-verde-marca dark:text-acento"
          >
            Nuestra carta
          </span>

          <h2
            class="font-titulo text-3xl font-semibold tracking-tight text-tinta sm:text-4xl md:text-5xl"
          >
            Sabores para cada
            <span class="font-normal italic">momento.</span>
          </h2>

          <p
            class="mx-auto mt-5 max-w-2xl font-cuerpo text-base leading-relaxed text-tinta-suave md:text-lg"
          >
            Café, pastelería artesanal y propuestas para disfrutar
            sin apuro.
          </p>
        </header>

        <!-- Categorías -->
        <nav
          aria-label="Categorías de la carta"
          class="mb-8 flex gap-2 overflow-x-auto pb-3 lg:flex-wrap lg:justify-center"
        >
          <button
            v-for="cat in categoriasMenu"
            :key="cat.id"
            type="button"
            :aria-pressed="categoriaActiva === cat.id"
            @click="categoriaActiva = cat.id"
            class="shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-colors sm:px-5"
            :class="
              categoriaActiva === cat.id
                ? 'border-tinta bg-tinta text-fondo'
                : 'border-borde-control bg-superficie text-tinta-suave hover:border-tinta hover:text-tinta'
            "
          >
            {{ cat.titulo }}
          </button>
        </nav>

        <!-- Carta + imágenes -->
        <div
          class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-7"
        >
          <!-- Panel de productos -->
          <article
            class="flex min-h-[570px] min-w-0 flex-col overflow-hidden rounded-2xl border border-borde-suave bg-superficie p-5 shadow-sm sm:p-7 lg:col-span-7 lg:h-[42rem] lg:min-h-0"
          >
            <!-- Título de categoría -->
            <div
              class="mb-5 flex shrink-0 items-center justify-between gap-3 border-b border-borde-suave pb-5"
            >
              <div class="flex min-w-0 items-center gap-3">
                <div
                  class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-fondo text-verde-marca dark:text-acento sm:size-12"
                >
                  <component
                    :is="categoriaSeleccionada.icono"
                    :size="24"
                    weight="regular"
                  />
                </div>

                <div class="min-w-0">
                  <h3
                    class="font-titulo text-xl font-semibold text-tinta sm:text-2xl"
                  >
                    {{ categoriaSeleccionada.titulo }}
                  </h3>

                  <p class="mt-1 text-xs text-tinta-suave sm:text-sm">
                    {{ categoriaSeleccionada.subtitulo }}
                  </p>
                </div>
              </div>

              <span
                class="shrink-0 rounded-full bg-fondo px-3 py-1.5 font-mono text-xs text-tinta-suave"
              >
                {{ String(paginaActual).padStart(2, '0') }} /
                {{ String(totalPaginas).padStart(2, '0') }}
              </span>
            </div>

            <!-- Productos -->
            <div class="min-h-0 flex-1 overflow-y-auto pr-1">
              <Transition
                mode="out-in"
                enter-active-class="transition-opacity duration-150"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div :key="`${categoriaActiva}-${paginaActual}`">
                  <div
                    v-if="itemsPaginados.length"
                    class="divide-y divide-borde-suave/70"
                  >
                    <div
                      v-for="item in itemsPaginados"
                      :key="item.nombre"
                      class="flex items-start justify-between gap-3 py-4 first:pt-1 last:pb-2 sm:gap-4"
                    >
                      <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-center gap-2">
                          <h4
                            class="text-sm font-semibold leading-snug text-tinta sm:text-base"
                          >
                            {{ item.nombre }}
                          </h4>

                          <span
                            v-if="item.badge"
                            class="rounded-full bg-verde-marca/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-verde-marca dark:bg-acento/15 dark:text-acento"
                          >
                            {{ item.badge }}
                          </span>
                        </div>

                        <p
                          v-if="item.descripcion"
                          class="mt-1.5 line-clamp-3 text-xs leading-relaxed text-tinta-suave sm:text-sm"
                        >
                          {{ item.descripcion }}
                        </p>
                      </div>

                      <span
                        class="shrink-0 whitespace-nowrap pt-0.5 font-mono text-sm font-semibold text-tinta sm:text-base"
                      >
                        {{ item.precio }}
                      </span>
                    </div>
                  </div>

                  <p
                    v-else
                    class="py-8 text-sm text-tinta-suave"
                  >
                    Próximamente incorporaremos productos a esta categoría.
                  </p>
                </div>
              </Transition>
            </div>

            <!-- Navegación inferior -->
            <footer
              class="mt-4 flex shrink-0 items-center justify-between gap-3 border-t border-borde-suave pt-4"
            >
              <p class="text-xs text-tinta-suave sm:text-sm">
                {{ categoriaSeleccionada.items.length }} productos
              </p>

              <div
                v-if="totalPaginas > 1"
                class="flex shrink-0 items-center gap-2"
              >
                <button
                  type="button"
                  :disabled="paginaActual === 1"
                  @click="cambiarPagina('anterior')"
                  aria-label="Página anterior"
                  class="flex size-9 cursor-pointer items-center justify-center rounded-full border border-borde-suave text-tinta transition-colors hover:border-verde-marca disabled:cursor-not-allowed disabled:opacity-30 dark:hover:border-acento"
                >
                  <PhCaretLeft :size="17" weight="bold" />
                </button>

                <button
                  type="button"
                  :disabled="paginaActual === totalPaginas"
                  @click="cambiarPagina('siguiente')"
                  aria-label="Página siguiente"
                  class="flex size-9 cursor-pointer items-center justify-center rounded-full border border-borde-suave text-tinta transition-colors hover:border-verde-marca disabled:cursor-not-allowed disabled:opacity-30 dark:hover:border-acento"
                >
                  <PhCaretRight :size="17" weight="bold" />
                </button>
              </div>
            </footer>
          </article>

          <!-- Dos fotografías -->
          <aside
            aria-label="Especialidades de Elsa"
            class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:h-[42rem] lg:grid-cols-1 lg:grid-rows-2"
          >
            <div
              class="group relative min-h-[230px] overflow-hidden rounded-2xl border border-borde-suave bg-superficie-alta sm:min-h-[280px] lg:min-h-0"
            >
              <img
                :src="imgTorta"
                alt="Torta artesanal de Elsa"
                loading="lazy"
                class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
              />

              <div class="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span
                  class="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80"
                >
                  Elaboración propia
                </span>

                <h3
                  class="mt-2 font-titulo text-2xl font-semibold text-white sm:text-3xl"
                >
                  Pastelería artesanal
                </h3>
              </div>
            </div>

            <div
              class="group relative min-h-[230px] overflow-hidden rounded-2xl border border-borde-suave bg-superficie-alta sm:min-h-[280px] lg:min-h-0"
            >
              <img
                :src="imgTortita"
                alt="Pastelería y opciones saladas de Elsa"
                loading="lazy"
                class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
              />

              <div class="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span
                  class="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80"
                >
                  Para cualquier momento
                </span>

                <h3
                  class="mt-2 font-titulo text-2xl font-semibold text-white sm:text-3xl"
                >
                  Dulce y salado
                </h3>
              </div>
            </div>
          </aside>
        </div>
      </FadeInObserver>
    </div>
  </section>
</template>
