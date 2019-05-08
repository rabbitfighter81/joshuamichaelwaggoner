import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export class Animations {
  public static fadeIn = trigger('fadeInAnimation', [
    transition('* => *', [
      style({
        opacity: '0',
      }),
      animate(
        '500ms ease',
        style({
          opacity: '1',
        }),
      ),
    ]),
  ]);

  public static diceRolling = trigger('diceRolling', [
    transition('* => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),
      query(
        ':enter',
        stagger('35ms', [
          animate(
            '.6s ease-in',
            keyframes([
              style({
                opacity: 0,
                transform: 'translateY(-75%) rotate(-90deg)',
                offset: 0,
              }),
              style({
                opacity: 0.5,
                transform: 'translateY(35px) rotate(200deg)',
                offset: 0.3,
              }),
              style({
                opacity: 1,
                transform: 'translateY(0) rotate(360deg)',
                offset: 1.0,
              }),
            ]),
          ),
        ]),
        { optional: true },
      ),
    ]),
  ]);

  public static listStagger = trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateX(-20px)',
          }),
          stagger(
            '25ms',
            animate(
              '450ms ease-out',
              style({
                opacity: 1,
                transform: 'translateX(0px)',
              }),
            ),
          ),
        ],
        {
          optional: true,
        },
      ),
    ]),
  ]);
}
