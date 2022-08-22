import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logobox} href="/">
				<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="150"
						height="50"
						viewBox="0 0 112.5 37.5"
					>
			<defs>
				<filter id="d" width="100%" height="100%" x="0%" y="0%">
				<feColorMatrix
					colorInterpolationFilters="sRGB"
					values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
				></feColorMatrix>
				</filter>
				<filter id="c" width="100%" height="100%" x="0%" y="0%">
				<feColorMatrix
					colorInterpolationFilters="sRGB"
					values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
				></feColorMatrix>
				</filter>
				<clipPath id="b">
				<path d="M.492 1h111.02v35H.492z"></path>
				</clipPath>
				<mask id="a">
				<g filter="url(#d)">
					<g filter="url(#c)" transform="translate(.493 .743) scale(.7434)">
					<image
						width="150"
						height="48"
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAwCAAAAADWL9zNAAAAAmJLR0QA/4ePzL8AAAPcSURBVFiF7ZdfaFtVHMc/XsIlhBBKCDOUUkIpWkopRcIIpVS6yZ5mXyaCDyr6MnyxioLIQB/G2MNAqUMU1NUH91JhDxP0yb/r6uxK3ZyE0UkN2RZjN0IaQm6ShXt9uLm35957TtIVH0Tu9yX39zu/8zvf8zu/3++cQIgQIUKE+P/iEftHyw4DNFeqtnwgGwOoXqkLtslcLOiguVloC6I+nQKorTQczYGcDrC14ZmmD2UGNL+v2lrVq9DPPzAMo3U7a4vRd3YMwzBal0dFo/m/WkYAO9ffTAg2mV9ahmG0bmRczcs7LcMwjPcjgpU2cebXvwOuWn/OOAaOsR6JANGueOR4AqCytCXSisZ0//4gOnmi8bHpihHbJupGInY4AVC/2hEmPXVqSmTp2rrKQCABHnt9EKCzvGzKhn0YeH6ox+jQJABF8QwH38jKWAmQ0Yoft4O5tljbAysYGesxeHAEgI2ioMvl+rmUsX7mhQhAafGmdIoYQQ0gllL7j87FAJqXGoJyOBpwBKB1XI2E1tQrKYD25xflrH5Yc/3M5gDMjtQQgMEnACitB4c6X+d9tO5tqmmlFuxy/O6TpnyljXe7NMz4RzmAxraa1pR9hr/9ERwyv//AKwvfXlr6woukD2kADe2t9q2ffpfk/MxZR6nbOVjaCho57ucSAJ1LkizVnn7cI979tOQ30b+0JGhdnxdL4tkdmZH14KSwt9EblmVZ1i07SAxftSzLsm5Pe1Z7rSXzc3dW4KjcKKBPnp7uNQ6AeeW8OrcmbHp5efGo0ZMWjD/Xp8GAWW0rx7S5JIB5uao02Rctxgf6eYgceUnS/G2k7WDfX91LW/Y49UjNgnsekUwUQA9G64679VQaQJ9fUuX8mH2nbuZlg2ax7pG3Kypa9bevdRXm2Gdp+VLmxUVn79nTGYD0iIKW9qTdaFelHaSz9IXnrNpCIfqCUS44XwkU0BpbTkjLxzLQo8unZjSA6s/ymqipG0u/3Oo5pVPr7WRsHAg8tR5ujb3C3Hv62k9C1ssPvUjf+g/i4EnnS5tQ2cQX6hraoQhA/Ud5B9EOP+rT3Fu+s29a2uysT9MO3izpV3e/i4ozjBw96tNsbzi09pFbAZQl97CA1YJfU+3x5LDxL9BqXFBXFFD5KvASWS/086n1kFQqD8zie2fVtw+0L6wEdDc/VDyF3MWc7lnIm0Blt+828vcBLS+8KkvXkgFS2+vfrInRqOc1T6VWvj1XwY/OucqxUUlWl13T7v9EBmIAncru5ZOMADSES7ar8tBq13x5kox6xLYij+JxyTGojEOECBEiRIgQ/zH8A1zaivGoIKeuAAAAAElFTkSuQmCC"
					></image>
					</g>
				</g>
				</mask>
			</defs>
			<g clipPath="url(#b)" mask="url(#a)">
				<image
				width="150"
				height="48"
				transform="translate(.493 .743) scale(.7434)"
				xlinkHref="data:image/png;base64,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"
				></image>
			</g>
			</svg>
			</a>
			
			<a className={Styles.link} href="/projects">
				Portfolio
			</a>
			<a className={Styles.link} href="/about">
				About
			</a>
			<a className={Styles.social} href="https://twitter.com/me">
				<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
				</svg>
			</a>
			<a className={Styles.social} href="https://github.com/me">
				<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
				</svg>
			</a>
			<a className={Styles.social} href="https://dev.to/me">
				<svg
					className={Styles.socialicon}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 40"
					style="enable-background:new 0 0 50 40"
					xmlSpace="preserve"
				>
					<path d="M15.7 15.5c-.4-.3-.7-.4-1.1-.4h-1.7v10.1h1.7c.4 0 .8-.1 1.1-.4.4-.3.6-.7.6-1.3v-6.7c0-.6-.2-1-.6-1.3z" />
					<path d="M47 0H3C1.3 0 0 1.3 0 3v34c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM19.1 23.5c0 1.3-.4 2.4-1.3 3.2-.8.9-1.9 1.3-3.3 1.3h-4.4V12.3h4.5c1.3 0 2.4.4 3.2 1.3.8.8 1.3 1.9 1.3 3.2v6.7zm9.1-8.4h-5.1v3.6h3.1v2.8h-3.1v3.7h5.1V28h-5.9c-.6 0-1-.2-1.4-.6-.4-.4-.6-.8-.6-1.4V14.2c0-.6.2-1 .6-1.4.4-.4.8-.6 1.4-.6h5.9v2.9zM37.5 26c-.6 1.3-1.3 2-2.2 2-.9 0-1.7-.7-2.2-2l-3.7-13.8h3.1L35.3 23l2.8-10.8h3.1L37.5 26z" />
				</svg>
			</a>
			<a className={Styles.social} href="https://app.kbve.com/">
			<div className={Styles.monogram}>App</div>
			</a>
		</nav>
	);
}
export default Nav;
