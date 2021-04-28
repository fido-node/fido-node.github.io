import * as React from 'react';
import Link from './Link';

type Props = {};

export default ({}: Props) => (
  <div className={'flex flex-col flex-row-2'}>
    <span className={'text-2xl text-center'}>Full stack engineer</span>
    <span className={'text-2xl text-center'}>FP-curious | λ-affected</span>
    <span className={'text-2xl text-center'}>Wanna be rustacean 🦀 and/or secops guy 🔒</span>
    <span className={'text-lg text-center text-gray-500 font-light pt-4'}>
      Now <Link href="https://www.samsungnext.com/">@SamsungNEXT</Link> (
      <Link href="https://whisk.com/">Whisk product team</Link>). Previously{' '}
      <Link href="https://www.visualthreat.com/">@VisualThreat.</Link>
    </span>
    <span className={'text-lg text-center text-gray-500 font-light'}>
      Work with: Scala, TypeScript, Java, MongoDB, MySQL, Thrift, gRPC
    </span>
  </div>
);
