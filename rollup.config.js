import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: 'src/index.js',
	dest: 'dist/bundle.js',
  format: 'cjs', // immediately-invoked function expression — suitable for <script> tags
	plugins: [
		resolve(),
		commonjs(),
	],
	sourceMap: true
};
