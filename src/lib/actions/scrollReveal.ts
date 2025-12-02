// Scroll reveal animation action for Svelte
// Uses Intersection Observer for performant scroll-based animations

export interface ScrollRevealOptions {
	threshold?: number;
	delay?: number;
	duration?: number;
	distance?: string;
	origin?: 'bottom' | 'top' | 'left' | 'right' | 'none';
	once?: boolean;
	scale?: number;
	opacity?: number;
}

const defaultOptions: ScrollRevealOptions = {
	threshold: 0.1,
	delay: 0,
	duration: 800,
	distance: '30px',
	origin: 'bottom',
	once: true,
	scale: 1,
	opacity: 0
};

export function scrollReveal(node: HTMLElement, options: ScrollRevealOptions = {}) {
	const config = { ...defaultOptions, ...options };

	// Set initial styles
	const initialTransform = getInitialTransform(config);
	node.style.opacity = String(config.opacity);
	node.style.transform = initialTransform;
	node.style.transition = `opacity ${config.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${config.delay}ms, transform ${config.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${config.delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Animate in
					node.style.opacity = '1';
					node.style.transform = 'translate3d(0, 0, 0) scale(1)';

					if (config.once) {
						observer.unobserve(node);
					}
				} else if (!config.once) {
					// Reset when out of view (if not once-only)
					node.style.opacity = String(config.opacity);
					node.style.transform = initialTransform;
				}
			});
		},
		{
			threshold: config.threshold,
			rootMargin: '0px 0px -50px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		},
		update(newOptions: ScrollRevealOptions) {
			Object.assign(config, newOptions);
		}
	};
}

function getInitialTransform(config: ScrollRevealOptions): string {
	const scale = config.scale !== 1 ? `scale(${config.scale})` : 'scale(1)';

	switch (config.origin) {
		case 'bottom':
			return `translate3d(0, ${config.distance}, 0) ${scale}`;
		case 'top':
			return `translate3d(0, -${config.distance}, 0) ${scale}`;
		case 'left':
			return `translate3d(-${config.distance}, 0, 0) ${scale}`;
		case 'right':
			return `translate3d(${config.distance}, 0, 0) ${scale}`;
		case 'none':
			return scale;
		default:
			return `translate3d(0, ${config.distance}, 0) ${scale}`;
	}
}

// Stagger animation helper - returns delay based on index
export function stagger(index: number, baseDelay: number = 100): number {
	return index * baseDelay;
}
