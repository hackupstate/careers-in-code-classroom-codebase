import {calculateTotal} from "./pricing";

describe("calculateTotal", () => {
    it("should add up the items", () => {
        const items = [
            {name: 'Charger', price: 12},
            {name: 'HDMI to USB C', price: 5},
            {name: 'Wall charger 18 350mA', price: 2},
        ]

        const total = calculateTotal(items, 0)

        expect(total).toEqual(19)
    })

    it("should handle an empty cart", () => {
        const items = []

        const total = calculateTotal(items, 0)

        expect(total).toEqual(0);
    });
})
