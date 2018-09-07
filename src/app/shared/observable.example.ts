import { Observable } from "rxjs/Observable";
import 'rxjs/Rx'; // import all rxjs library
export class ObservableExample {

    testObservable() {
        console.log('what happened');
        let flag=0;
        let observable = Observable.create((ob) => {
            ob.next(1);
            ob.next(10);
            setTimeout(() => {
                ob.next(2);
                ob.next(2);
                ob.next(2);
                ob.next(4);
                ob.next(2);
                ob.next(2);
                ob.next(2);
                ob.next(5);
                if (flag<=5) {
                    console.log("throwing",flag);
                    ob.error(new Error('failed te'));
                    ++flag;
                }
            }, 5000);
            setTimeout(() => {
                ob.next(3);
                ob.next(3);
                ob.next(3);
                ob.next(30);
                ob.complete();

            }, 7000);
        });

        let sub1 = observable
            .distinctUntilChanged()
            .filter(item => { return item > 0 })
            .subscribe(data => {
                console.log("sub one ", data);
            },
                (err) => {
                    console.log("Got an error sub one", err);
                },
                () => {
                    console.log('Sub one completed');
                }
            );

        setTimeout(() => {
            console.log("unsubscribing");

            sub1.unsubscribe();
        }, 1000);

        //     .do(item => { console.log("raw", item) })

        setTimeout(() => {
            observable
            .retry(5)
                .debounceTime(400)
                .map(item => { return item * 1 })
                .subscribe(data => {
                    console.log("sub two ", data);
                },
                    (err) => {
                        console.log("Got an error sub two", err);
                    },
                    () => {
                        console.log('Sub two completed');

                        this.testArray();
                    }
                );
        }, 3000);

    }


    testArray() {
        console.log('testing array');

        let obser = Observable.from([1,2,3,4,5,6,7,9]);
        obser.subscribe(d=>console.log("Array item ", d));
    }
}