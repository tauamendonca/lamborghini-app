import { CarModel } from "./props"

export function disableButton(carData: CarModel | null, forward: boolean) {
      if (carData) {
        if (carData.id >= 10 && forward) {
          return true
        }
        if (carData.id <= 1 && !forward) {
          return true
        }
        return false
      } else {
        return false
      }
  }