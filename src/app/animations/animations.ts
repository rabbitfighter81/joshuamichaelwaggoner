import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes
} from '@angular/animations';

export class Animations {

  public static dropDownAnimation = trigger('dropDownAnimation', [
    transition(':enter', [
      style({
        height: '0'
      }),
      animate('250ms linear', style({
        height: '*'
      }))
    ]),
    transition(':leave', [
      style({
        height: '*'
      }),
      animate('250ms linear', style({
        height: '0'
      }))
    ])
  ]);

  public static navItems = trigger('navItems', [
    transition(':enter', [

      query(':enter', style({
        opacity: 0
      }), {
        optional: true
      }),

      query(':enter', stagger('100ms', [
        animate('.50s ease-in', keyframes([
          style({
            opacity: 0,
            transform: 'translateY(-75%)',
            offset: 0
          }),
          style({
            opacity: .5,
            transform: 'translateY(35px)',
            offset: 0.3
          }),
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 1.0
          }),
        ]))
      ]), {
        optional: true
      })
    ]),
    transition(':leave', [
      query(':leave', animate('0ms', style({
        opacity: 0
      })), {
        optional: true
      })
    ])
  ]);


  public static fadeIn = trigger('fadeInAnimation', [
    transition('* => *', [
      style({
        opacity: '0'
      }),
      animate('500ms ease', style({
        opacity: '1'
      }))
    ]),

  ]);

  public static bid = trigger('bidAnimation', [
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('500ms ease-in')
    ]),
    transition('* => *', [
      style({
        color: '#F00',
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('500ms ease-in')
    ])
  ]);

  public static topAuctionsBid = trigger('topAuctionsBid', [
    transition('void => *', [
      style({
        color: '#F00',
        opacity: 0,
        height: '0',
        transform: 'translateX(-50%)'
      }),
      animate('1000ms ease-in')
    ]),
    transition('* => *', [
      style({
        color: '#F00',
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('1000ms ease-in')
    ])
  ]);

  public static time = trigger('time', [
    transition('* => *', [
      style({
        transform: 'translateY(-100%)'
      }),
      animate('200ms')
    ])
  ]);

  public static ex1 = trigger('photosAnimation', [
    transition('* => *', [
      query('tr', style({
        transform: 'translateX(-100%)'
      })),
      query('tr',
        stagger('10ms', [
          animate('250ms', style({
            transform: 'translateX(0)'
          }))
        ]))
    ])
  ]);

  public static listStagger = trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter', [
          style({
            opacity: 0,
            transform: 'translateX(-20px)'
          }),
          stagger(
            '25ms',
            animate(
              '450ms ease-out',
              style({
                opacity: 1,
                transform: 'translateX(0px)'
              })
            )
          )
        ], {
          optional: true
        }
      )
    ])
  ]);

}
