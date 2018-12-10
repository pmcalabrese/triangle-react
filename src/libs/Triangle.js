class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (!this.isValid()) {
            throw new Error(`${a}, ${b}, ${c} Is not a valid triangle`);
        }
    }

    isValid() {
        return !(this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a)
    }

    type() {
        // equilateral, isocele, scalen
        if (this.a === this.b && this.a === this.c) return "equilateral";
        const sorted_sides = [this.a, this.b, this.c].sort();
        for (let i = 0; i < sorted_sides.length - 1; i++) {
          const side = sorted_sides[i];
          const next_side = sorted_sides[i + 1];
          if (side === next_side) return "isosceles";
        }
        return "scalene";
      }
}

export default Triangle;