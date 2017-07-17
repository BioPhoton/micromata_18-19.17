export class SimpleService {

  divide(a: number, b: number): number {
    if(b==0) {
      throw new Error('Infinity Error')
    }
    return a/b;
  }

  multiply(a: number, b: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(a*b);
      }, 300);
    });
  }


}
