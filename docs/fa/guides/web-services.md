
# وب سرویس و توکن‌ها

وب سرویس ویراک کلود این امکان را به توسعه‌دهندگان می‌دهد که به‌صورت برنامه‌نویسی شده با پلتفرم تعامل کنند.
با استفاده از این API می‌توانید ماشین‌ها، شبکه‌ها، فضای ذخیره‌سازی و سایر سرویس‌ها را مدیریت کنید.


## ۱. احراز هویت

تمام درخواست‌ها به وب سرویس نیاز به **توکن API** دارند.
توکن باید در هدر `Authorization` ارسال شود:

```http
Authorization: Bearer YOUR_TOKEN
```

> ⚠️ به دلایل امنیتی، مقدار توکن فقط **یک‌بار** هنگام ساخت نمایش داده می‌شود.


## ۲. لیست توکن‌ها

<DarkModeImage
  dark-src="/images/guides/fa/dark/public-api/tokens-list.webp"
  light-src="/images/guides/fa/light/public-api/tokens-list.webp"
  alt="Web Services - Token List"
/>

در صفحه **توکن‌ها** می‌توانید لیست تمام توکن‌های ایجاد شده را مشاهده کنید.
اطلاعات هر توکن شامل موارد زیر است:

| نام             | آخرین زمان استفاده | تاریخ انقضا     | توانایی ها                                                     |
| -------------- | ------------------- | --------------- | ----------------------------------------------------------- |
| My First Token | 1404/03/05 14:22    | 1404/10/10      | `dns:domain:list, instance:create, kubernetes:cluster:list` |
| Backup Token   | 1404/05/23 09:10    | 1404/12/05      | `object_storage:bucket:create, network:firewall:ipv4:list`  |

* **نام توکن** – نامی که هنگام ساخت وارد کرده‌اید.
* **آخرین استفاده** – آخرین زمانی که توکن در درخواست API استفاده شده است.
* **تاریخ انقضا** – زمانی که توکن منقضی می‌شود و دیگر معتبر نیست.
* **توانایی‌ها** – مجموعه اقداماتی که توکن مجاز به انجام آن‌هاست.

---

## ۳. ساخت توکن جدید

<DarkModeImage
  dark-src="/images/guides/fa/dark/public-api/create-token.webp"
  light-src="/images/guides/fa/light/public-api/create-token.webp"
  alt="Web Services - Create New Token"
/>

برای ایجاد یک توکن جدید:

1. از منوی کناری، گزینه **وب‌سرویس** را انتخاب کنید.
2. در صفحه **وب‌سرویس**، روی **ایجاد توکن** کلیک کنید.
3. نام، تاریخ انقضا و دسترسی‌های مورد نیاز را مشخص کنید.
4. پس از ساخت، مقدار توکن را کپی و در محل امن ذخیره کنید — مجدداً نمایش داده نخواهد شد.



### نمونه درخواست API – ساخت توکن

```bash
curl --request GET \
    --get "https://public-api.virakcloud.com/api/external/zones" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"
```


## ۴. مرجع کامل API

برای مشاهده مستندات کامل (شامل تمام اندپوینت‌ها و پارامترها)،
به لینک زیر مراجعه کنید:

<div style="text-align: left;">
    <a href="https://api-docs.virakcloud.com">https://api-docs.virakcloud.com</a>
</div>
