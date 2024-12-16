import { defineConfig } from 'vitepress'
import rtlcss from 'rtlcss'
import dotenv from 'dotenv';
import path from 'path';

// Manually load the correct .env file based on your build mode
dotenv.config({
  path: path.resolve(process.cwd(), process.env.BUILD_ENV === 'production'
    ? '.env.master'
    : '.env.dev')
});


const github_link_url = 'https://github.com/virak-cloud/docs/edit/main/docs/:path'

export default defineConfig({
  lang: 'fa-IR',
  cleanUrls: true,
  sitemap: {
    hostname: process.env.VITE_SITEURL ?? ''
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
  ],
  vite: {
    css: {
      postcss: {
        plugins: [
          rtlcss()
        ]
      }
    }
  },
  markdown: {
    // https://github.com/markdown-it/markdown-it
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  lastUpdated: false,
  themeConfig: {
    logo: '/images/logo-final.webp',
    search: {
      provider: 'local',
      options: {
        locales: {
          fa: {
            translations: {
              button: {
                buttonText: 'جستجو',
                buttonAriaLabel: 'جستجو'
              },
              modal: {
                displayDetails: 'نمایش جزئیات',
                resetButtonTitle: 'پاک کردن متن جستجو',
                backButtonTitle: 'بازگشت',
                noResultsText: 'نتیجه ای برای جسنجوی شما پیدا نشد :(',
                footer: {
                  selectText: 'انتخاب کنید',
                  navigateText: 'پیمایش کنید',
                  closeText: 'بستن',
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      {
        icon: {
          svg: `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 189.473 189.473" xml:space="preserve">
                  <g>
                    <path d="M152.531,179.476c-1.48,0-2.95-0.438-4.211-1.293l-47.641-32.316l-25.552,18.386c-2.004,1.441-4.587,1.804-6.914,0.972
                      c-2.324-0.834-4.089-2.759-4.719-5.146l-12.83-48.622L4.821,93.928c-2.886-1.104-4.8-3.865-4.821-6.955
                      c-0.021-3.09,1.855-5.877,4.727-7.02l174.312-69.36c0.791-0.336,1.628-0.53,2.472-0.582c0.302-0.018,0.605-0.018,0.906-0.001
                      c1.748,0.104,3.465,0.816,4.805,2.13c0.139,0.136,0.271,0.275,0.396,0.42c1.11,1.268,1.72,2.814,1.835,4.389
                      c0.028,0.396,0.026,0.797-0.009,1.198c-0.024,0.286-0.065,0.571-0.123,0.854L159.898,173.38c-0.473,2.48-2.161,4.556-4.493,5.523
                      C154.48,179.287,153.503,179.476,152.531,179.476z M104.862,130.579l42.437,28.785L170.193,39.24l-82.687,79.566l17.156,11.638
                      C104.731,130.487,104.797,130.533,104.862,130.579z M69.535,124.178l5.682,21.53l12.242-8.809l-16.03-10.874
                      C70.684,125.521,70.046,124.893,69.535,124.178z M28.136,86.782l31.478,12.035c2.255,0.862,3.957,2.758,4.573,5.092l3.992,15.129
                      c0.183-1.745,0.974-3.387,2.259-4.624L149.227,38.6L28.136,86.782z"/>
                  </g>
                </svg>`
        },
        link: 'https://t.me/virakcloud'
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/virakcloud/'
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/virak-cloud-a39598264/'
      }, {
        icon: 'twitter',
        link: 'https://twitter.com/virakcloud'
      },
      {
        icon: {
          svg: `<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 1.594c-9.27-.003-13.913 11.203-7.36 17.758a10.403 10.403 0 0 0 17.76-7.355c0-5.744-4.655-10.401-10.4-10.403zM6.11 6.783c.501-2.598 3.893-3.294 5.376-1.103 1.483 2.19-.422 5.082-3.02 4.582A2.97 2.97 0 0 1 6.11 6.783zm4.322 8.988c-.504 2.597-3.897 3.288-5.377 1.096-1.48-2.192.427-5.08 3.025-4.579a2.97 2.97 0 0 1 2.352 3.483zm1.26-2.405c-1.152-.223-1.462-1.727-.491-2.387.97-.66 2.256.18 2.04 1.334a1.32 1.32 0 0 1-1.548 1.053zm6.198 3.838c-.501 2.598-3.893 3.293-5.376 1.103-1.484-2.191.421-5.082 3.02-4.583a2.97 2.97 0 0 1 2.356 3.48zm-1.967-5.502c-2.598-.501-3.293-3.896-1.102-5.38 2.19-1.483 5.081.422 4.582 3.02a2.97 2.97 0 0 1-3.48 2.36zM13.59 23.264l2.264.61a3.715 3.715 0 0 0 4.543-2.636l.64-2.402a11.383 11.383 0 0 1-7.448 4.428zm7.643-19.665L18.87 2.97a11.376 11.376 0 0 1 4.354 7.62l.65-2.459A3.715 3.715 0 0 0 21.231 3.6zM.672 13.809l-.541 2.04a3.715 3.715 0 0 0 2.636 4.543l2.107.562a11.38 11.38 0 0 1-4.203-7.145zM10.357.702 8.15.126a3.715 3.715 0 0 0-4.547 2.637l-.551 2.082A11.376 11.376 0 0 1 10.358.702z"/></svg>`
        },
        link: 'https://www.aparat.com/virak'
      },
    ]
  },
  locales: {
    fa: {
      label: 'فارسی',
      lang: 'fa',
      link: '/fa',
      dir: 'rtl',
      title: 'ابر ویراک',
      description: 'ابر ویراک: پیشگام در ارائه خدمات رایانش ابری',
      themeConfig: {
        siteTitle: 'مستندات ابر ویراک',
        logoLink: '/fa/guides/index',
        // https://vitepress.dev/reference/site-config#lastupdated
        lastUpdated: {
          text: 'آخرین بروزرسانی'
        },
        editLink: {
          pattern: github_link_url,
          text: 'این صفحه را در گیت هاب ویرایش کنید'
        },
        sidebarMenuLabel: 'منو',
        returnToTopLabel: 'بازگشت به بالا',
        outline: {
          label: 'در این صفحه'
        },
        darkModeSwitchLabel: 'ظاهر',
        docFooter: {
          prev: 'صفحه قبلی',
          next: 'صفحه بعدی'
        },

        sidebar: [
          {
            text: 'راهنمای استفاده',
            items: [
              { text: 'ثبت نام', link: '/fa/guides/user/register' },
              { text: 'احراز هویت', link: '/fa/guides/user/authentication' },
              { text: 'داشبورد', link: '/fa/guides/dashboard' },
              {
                text: 'میزبانی زیرساخت ابری',
                items: [
                  {
                    text: 'لیست ابرک ها',
                    link: '/fa/guides/instances/list'
                  },
                  {
                    text: 'جزئیات ابرک ها',
                    link: '/fa/guides/instances/details'
                  },
                  {
                    text: 'ایجاد ابرک ها',
                    link: '/fa/guides/instances/create'
                  },
                  {
                    text: 'دیسک ها',
                    link: '/fa/guides/instances/disk'
                  }

                ],
                collapsed: true
              },
              {
                text: 'شبکه های مجازی',
                items: [
                  {
                    text: 'لیست شبکه ها',
                    link: '/fa/guides/networks/list',
                    items: [{
                      text: 'جزئیات شبکه',
                      items: [
                        {
                          text: 'پیکربندی شبکه',
                          link: '/fa/guides/networks/details/config'
                        },
                        {
                          text: 'ابرک های متصل',
                          link: '/fa/guides/networks/details/connected-instances'
                        },
                        {
                          text: 'فایروال های v4 , v6',
                          link: '/fa/guides/networks/details/firewall'
                        },
                        {
                          text: 'انتقال پورت',
                          link: '/fa/guides/networks/details/port-forward'
                        },
                        {
                          text: 'توزیع بار',
                          link: '/fa/guides/networks/details/load-balance'
                        }, {
                          text: 'VPN',
                          link: '/fa/guides/networks/details/vpn'
                        },
                      ],
                      collapsed: true
                    }]
                  },
                  {
                    text: 'نقشه شبکه',
                    link: '/fa/guides/networks/map'
                  },
                  {
                    text: 'ایجاد شبکه',
                    link: '/fa/guides/networks/create'
                  }

                ],
                collapsed: true
              },
              {
                text: 'میزبانی دامنه',
                link: '/fa/guides/dns'
              },
              {
                text: 'حسابداری و مالی',
                items: [
                  {
                    text: 'لیست پرداخت ها',
                    link: '/fa/guides/accounting/payments'
                  },
                  {
                    text: 'لیست تراکنش ها',
                    link: '/fa/guides/accounting/transactions'
                  },
                  {
                    text: 'هدایا',
                    link: '/fa/guides/accounting/gifts'
                  },
                ],
                collapsed: true,
              },
              {
                text: 'پشتیبانی',
                items: [
                  {
                    text: 'لیست درخواست ها',
                    link: '/fa/guides/tickets/list'
                  },
                  {
                    text: 'ثبت درخواست جدید',
                    link: '/fa/guides/tickets/create'
                  },
                  {
                    text: 'بسته های پشتیبانی',
                    link: '/fa/guides/tickets/plans'
                  },
                ],
                collapsed: true,
              },
              {
                text: 'گزارش تغییرات',
                link: '/fa/guides/changelogs'
              }

            ],
          }],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'ltr',
      link: '/en',
      title: 'Virak Cloud',
      description: 'Virak Cloud: A Pioneer in Cloud Computing Services',
      themeConfig: {
        siteTitle: 'Virak Cloud Documents',
        logoLink: '/en/guides/index',
        editLink: {
          pattern: github_link_url,
          text: 'Edit this page on GitHub'
        },
        sidebar: [
          {
            text: 'User Guide',
            items: [
              { text: 'Sign Up', link: '/en/guides/user/register' },
              { text: 'Authentication', link: '/en/guides/user/authentication' },
              { text: 'Dashboard', link: '/en/guides/dashboard' },
              {
                text: 'Cloud Infrastructure Hosting',
                items: [
                  {
                    text: 'List of Cloud Instances',
                    link: '/en/guides/instances/list'
                  },
                  {
                    text: 'Details of Cloud Instances',
                    link: '/en/guides/instances/details'
                  },
                  {
                    text: 'Create Cloud Instances',
                    link: '/en/guides/instances/create'
                  },
                  {
                    text: 'Disks',
                    link: '/en/guides/instances/disk'
                  }
                ],
                collapsed: true
              },
              {
                text: 'Virtual Networks',
                items: [
                  {
                    text: 'List of Networks',
                    link: '/en/guides/networks/list',
                    items: [{
                      text: 'Network Details',
                      items: [
                        {
                          text: 'Network Configuration',
                          link: '/en/guides/networks/details/config'
                        },
                        {
                          text: 'Connected Cloud Instances',
                          link: '/en/guides/networks/details/connected-instances'
                        },
                        {
                          text: 'Firewalls (v4, v6)',
                          link: '/en/guides/networks/details/firewall'
                        },
                        {
                          text: 'Port Forwarding',
                          link: '/en/guides/networks/details/port-forward'
                        },
                        {
                          text: 'Load Balancing',
                          link: '/en/guides/networks/details/load-balance'
                        },
                        {
                          text: 'VPN',
                          link: '/en/guides/networks/details/vpn'
                        }
                      ],
                      collapsed: true
                    }]
                  },
                  {
                    text: 'Network Map',
                    link: '/en/guides/networks/map'
                  },
                  {
                    text: 'Create Network',
                    link: '/en/guides/networks/create'
                  }
                ],
                collapsed: true
              },
              {
                text: 'Domain Hosting',
                link: '/en/guides/dns'
              },
              {
                text: 'Accounting & Finance',
                items: [
                  {
                    text: 'Payment List',
                    link: '/en/guides/accounting/payments'
                  },
                  {
                    text: 'Transaction List',
                    link: '/en/guides/accounting/transactions'
                  },
                  {
                    text: 'Gifts',
                    link: '/en/guides/accounting/gifts'
                  }
                ],
                collapsed: true
              },
              {
                text: 'Support',
                items: [
                  {
                    text: 'List of Requests',
                    link: '/en/guides/tickets/list'
                  },
                  {
                    text: 'Submit New Request',
                    link: '/en/guides/tickets/create'
                  },
                  {
                    text: 'Support Packages',
                    link: '/en/guides/tickets/plans'
                  }
                ],
                collapsed: true
              },
              {
                text: 'Changelog',
                link: '/en/guides/changelogs'
              }
            ]
          }
        ],
      }
    }
  }
})
