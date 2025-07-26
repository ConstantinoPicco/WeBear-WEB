import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    group([
      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100px) scale(0.95)'
        }),
        animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({
            opacity: 1,
            transform: 'translateX(0) scale(1)'
          })
        )
      ], { optional: true }),
      query(':leave', [
        animate('300ms cubic-bezier(0.4, 0, 0.6, 1)',
          style({
            opacity: 0,
            transform: 'translateX(-50px) scale(0.98)'
          })
        )
      ], { optional: true })
    ])
  ])
]);
