import { createModel } from "@rematch/core";
import type { RootModel } from '@/models'



export const sideRouterModel = createModel<RootModel>()({
    state:{
        path: "/"
    },
    
  
})