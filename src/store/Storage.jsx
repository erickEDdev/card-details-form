import { create } from "zustand";

export const useStorage = create((set) => ({
    infos: {
        name: "JANE APPLESEED",
        numberCard: "0000 0000 0000 0000",
        mm: "00",
        yy: "00",
        cvc: 0

    }
}))