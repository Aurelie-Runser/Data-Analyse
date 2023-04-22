<template>
        <nav class="w-full lg:bg-green-100 flex flex-row items-center justify-between">

            <!-- icon menu -->
            <div class="fixed lg:hidden z-50 top-5 right-5">
                <button class=""
                        :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">

                    <menu_burger v-if="!menuOuvert"/>

                    <menu_cross v-else/>

                </button>
            </div>

            <!-- Menu phone -->
            <div id="menu"
                class="fixed z-40 overflow-y-hidden top-0 -translate-y-full w-screen h-screen px-12 bg-green-100 lg:hidden duration-500 transition-transform"
                :class="{ 'translate-y-0': menuOuvert }">

                <ul class="h-5/6 my-20 font-lexend font-base text-lg text-green-900 flex flex-col justify-between">
                    <li>
                        <RouterLink to="/" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base"
                            :aria-expanded="menuOuvert" @click="menuOuvert = false">
                            Introduction
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/prod_filiere" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base"
                            :aria-expanded="menuOuvert" @click="menuOuvert = false">
                            1 - Productions par filière
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/prod_filiere_temps" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base"
                            :aria-expanded="menuOuvert" @click="menuOuvert = false">
                            2 - Productions par filière au cours du temps
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/prod_eol" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base"
                            :aria-expanded="menuOuvert" @click="menuOuvert = false">
                            3 - Productions éolien par région
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/prod_hydrau" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base"
                            :aria-expanded="menuOuvert" @click="menuOuvert = false">
                            4 - Productions hydraulique par région
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/conso" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base"
                            :aria-expanded="menuOuvert" @click="menuOuvert = false">
                            5 - Type de consommation par région
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/conclusion" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base"
                            :aria-expanded="menuOuvert" @click="menuOuvert = false">
                            Conclusion
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <!-- Menu ordi -->
            <ul class="hidden w-full p-5 grid-cols-2 justify-items-start gap-3 font-lexend font-semibold text-lg text-green-900 lg:grid">
                <li class="col-span-full">
                    <RouterLink to="/" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base">
                        Introduction
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/prod_filiere" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base">
                        1 - Productions par filière
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/prod_filiere_temps" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base">
                        2 - Productions par filière au cours du temps
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/prod_eol" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base">
                        3 - Productions éolien par région
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/prod_hydrau" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base">
                        4 - Productions hydraulique par région
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/conso" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base">
                        5 - Type de consommation par région
                    </RouterLink>
                </li>
                <li class="col-span-full">
                    <RouterLink to="/conclusion" class="hover:font-extrabold hover:text-base focus:font-extrabold focus:text-base">
                        Conclusion
                    </RouterLink>
                </li>
            </ul>
        </nav>
</template>

<script>
import menu_burger from "@/components/icons/menu_burger.vue"
import menu_cross from "@/components/icons/menu_cross.vue"

export default {
  name: "MonHeader",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { menu_burger, menu_cross },

}
</script>
