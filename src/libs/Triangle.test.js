import Triangle from "./Triangle";

test('Create a valid triangle', () => {
    const t = new Triangle(2,3,4)
    expect(t).toBeInstanceOf(Triangle);
});

test('Create a valid triangle and check isValid method', () => {
    const t = new Triangle(2,3,4)
    expect(t.isValid()).toBe(true)
});

test('Create a valid scalen triangle', () => {
    const t = new Triangle(2,3,4)
    expect(t.type()).toBe("scalene");
});

test('Create a valid isocele triangle', () => {
    const t = new Triangle(5,5,4)
    expect(t.type()).toBe("isosceles");
});

test('Create a valid equilateral triangle', () => {
    const t = new Triangle(5,5,5)
    expect(t.type()).toBe("equilateral");
});

test('Create a not valid triangle, with negative side as input', () => {
    expect(() => {
        new Triangle(2,3,-1)
    }).toThrowError();
});

test('Create a not valid triangle, with positive side as input', () => {
    expect(() => {
        new Triangle(2,3,10)
    }).toThrowError();
});