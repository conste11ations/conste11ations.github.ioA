import styles from "../../styles/Home.module.css";
import Head from "next/head";

export function CodePost1() {
  return (
    <>
      <div className={styles.container}>
        <h1>The magic of the RxJS share operators</h1>
        <div className={styles.main}>
          <p>
            There are two main ways to reap the benefits of the RxJS
            share/shareReplay operators:
          </p>
          <ol>
            <li>
              <b>Share reduces repeated computations</b>
              <ul>
                <li>
                  With multiple subscribers to the same observable, you can
                  process computations (side-effects) once, broadcast the
                  results to whoever is listening.
                </li>
              </ul>
            </li>
            <li>
              <b>
                ShareReplay = share + making sure "everyone's on the same page"
              </b>
              <ul>
                <li>
                  When there are multiple subscribers, and you want to make sure
                  they all get the same data, at the same time
                </li>
              </ul>
            </li>
          </ol>
          <h2>1. Reduce Repeated Computations</h2>
          <p>
            <b>Without share()</b>
          </p>
          <code>
            <pre className="grey">
              {`import { interval } from 'rxjs';
import { share, map } from 'rxjs/operators';
  `}
            </pre>
            <pre>
              {`const source = interval(1000)
   .pipe(
         map((x: number) => {
             console.log('INTENSE computation for: ', x)
             return x * x;
         })
 );

source.subscribe(x => console.log('subscription 1: ', x));
source.subscribe(x => console.log('subscription 2: ', x));
 `}
            </pre>
            <pre className="grey">{`// Console:
// INTENSE computation for:  0
// subscription 1:  0
// INTENSE computation for:  0
// subscription 2:  0
// INTENSE computation for:  1
// subscription 1:  1
// INTENSE computation for:  1
// subscription 2:  1
// INTENSE computation for:  2
// subscription 1:  4
// INTENSE computation for:  2
// subscription 2:  4`}</pre>
          </code>
          <p>
            <b>With share()</b>
          </p>
          <code>
            <pre className="grey">
              {`import { interval } from 'rxjs';
import { share, map } from 'rxjs/operators';
  `}
            </pre>
            <pre>
              {`const source$ = interval(1000)
   .pipe(
         map((x: number) => {
             console.log('Heavy-duty computation for: ', x)
             return x * x;
         })

source$.subscribe(x => console.log('subscription 1: ', x));
source$.subscribe(x => console.log('subscription 2: ', x));
 );`}
            </pre>
            <pre className="grey">{`// Console:
// INTENSE computation for:  0
// subscription 1:  0
// subscription 2:  0
// INTENSE computation for:  1
// subscription 1:  1
// subscription 2:  1
// INTENSE computation for:  2
// subscription 1:  4
// subscription 2:  4`}</pre>
          </code>
          <h2>2. Everyone's On the Same Page</h2>
          <code>
            <pre className="grey">
              {`import { Component } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, share, shareReplay, tap } from "rxjs/operators";

  @Component({
    selector: "my-app",`}
            </pre>
            <pre>
              {`templateUrl: \`
    <div *ngIf="(source$ | async)">
      <div *ngIf="(source$ | async)">
        <div>{{ source$ | async }}1</div>
      </div>
    </div>
    <div *ngIf="(source$ | async)">
      <div>{{ source$ | async }}2</div>
    </div>
  \`,
})`}
            </pre>
            <pre className="grey">{`
export class AppComponent {
  source$: Observable<any>;
`}</pre>
            <pre>
              {`
  ngOnInit() {
`}
            </pre>
            <pre className="yellow">{`     this.source$ = this.getData();`}</pre>
            <pre>
              {` }

  getData() {
    // Fake Slow Async Data
    return of("here is data").pipe(
      tap(() => console.log("side-effect")),
      delay(2000)
    );
  }
}`}
            </pre>
          </code>
          <p>
            <b>
              If the yellow line was
              <code>this.source$ = this.getData()</code>
            </b>
          </p>
          <p>
            <b>
              If the yellow line was
              <code>this.source$ = this.getData(share())</code>
            </b>
          </p>
          <p>
            <b>
              If the yellow line was
              <code>this.source$ = this.getData(shareReplay(1))</code>
            </b>
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        <b>Reference documentation</b>
        <ul>
          <li>
            <a
              href="https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/share.ts"
              className="underlined-link"
            >
              RxJS source code (caution: check your version as the share
              operator has undergone changes between versions)
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@mikesnare/angular-async-pipes-beware-the-share-bcc9c1cd849d"
              className="underlined-link"
            >
              Beware the Share by Mike Snare
            </a>
          </li>
          <li>
            <a
              href="https://netbasal.com/understanding-rxjs-multicast-operators-77b3f60af0a2"
              className="underlined-link"
            >
              Understanding multicast operators by Netanel Basal
            </a>
          </li>
          <li>
            <a
              href="https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255"
              className="underlined-link"
            >
              The magic of RXJS sharing operators and their differences by
              ITNEXT
            </a>
          </li>
          <li>
            <a
              href="https://coryrylan.com/blog/angular-async-data-binding-with-ng-if-and-ng-else#async-pipe-and-the-share-operator"
              className="underlined-link"
            >
              Angular Async Data Binding with ngIf and ngElse by Cory Rylan
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default CodePost1;
