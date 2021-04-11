import styles from "../../styles/Home.module.css";
import Head from "next/head";

export function CodePost1() {
  return (
    <>
      <div className={styles.container}>
        <h1>The magic of the RxJS share operator</h1>
        <p>
          There are two main ways to reap the benefits of the RxJS share
          operator:
          <ol>
            <li>
              <b>Reduce repeated computations</b>
              <ul>
                <li>
                  When you have multiple subscribers to the same observable, you
                  can process computations (side-effects) once, broadcast the
                  results to whoever is listening.
                </li>
              </ul>
            </li>
            <li>
              <b>"Everyone's on the same page"</b>
              <ul>
                <li>
                  When you have multiple subscribers and you want to make sure
                  they all get the same thing
                </li>
              </ul>
            </li>
          </ol>
        </p>
        <h2>1. Reduce Repeated Computations</h2>
        <p>
          <b>Without share()</b>
        </p>
        <code className="code">
          <pre className="grey">
            {`import { interval } from 'rxjs';
import { share, map } from 'rxjs/operators';
  `}
          </pre>
          <pre>
            {`const source = interval(1000)
   .pipe(
         map((x: number) => {
             console.log('Intense computation for: ', x)
             return x * x;
         })
 );

source.subscribe(x => console.log('subscription 1: ', x));
source.subscribe(x => console.log('subscription 2: ', x));
 `}
          </pre>
          <pre className="grey">{`// Console:
// Intense computation for:  0
// subscription 1:  0
// Intense computation for:  0
// subscription 2:  0
// Intense computation for:  1
// subscription 1:  1
// Intense computation for:  1
// subscription 2:  1
// Intense computation for:  2
// subscription 1:  4
// Intense computation for:  2
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
            {`const source = interval(1000)
   .pipe(
         map((x: number) => {
             console.log('Heavy-duty computation for: ', x)
             return x * x;
         })

source.subscribe(x => console.log('subscription 1: ', x));
source.subscribe(x => console.log('subscription 2: ', x));
 );`}
          </pre>
          <pre className="grey">{`// Console:
// Intense computation for:  0
// subscription 1:  0
// subscription 2:  0
// Intense computation for:  1
// subscription 1:  1
// subscription 2:  1
// Intense computation for:  2
// subscription 1:  4
// subscription 2:  4`}</pre>
        </code>
      </div>
      <div className={styles.footer}>
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
        </ul>
      </div>
    </>
  );
}

export default CodePost1;
