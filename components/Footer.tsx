import * as React from 'react';

type Props = {};

export default ({}: Props) => (
  <footer className="footer relative pt-1 border-t-2 border-blue-100">
    <div className="container mx-auto px-6 py-3">
      <h6 className="text-center text-gray-500">
        © 2020. Aleksandr Mihailov.{' '}
        <a href="http://creativecommons.org/licenses/by/3.0/">Some Rights Reserved</a>.
      </h6>
    </div>
  </footer>
);
