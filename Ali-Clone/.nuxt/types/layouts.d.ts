import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main-layout"
declare module "C:/Users/lexmu/OneDrive/Área de Trabalho/Ali_Clone/Ali-Clone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}