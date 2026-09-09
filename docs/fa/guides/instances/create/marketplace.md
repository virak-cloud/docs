# نصب و استفاده از تمپلیت‌های بازارچه ویراکلود

در پلتفرم ابری ویراکلود، ما برای راحتی و سرعت شما، تمپلیت‌هایی از اپلیکیشن های آماده‌ی نصب را در بازارچه‌ی خود ارائه می‌دهیم. این تمپلیت‌ها برای نرم‌افزارهای پرکاربرد مانند Mysql، WordPress، GitLab، FileServer و بسیاری موارد دیگر طراحی شده‌اند و تنها با چند کلیک قابل نصب هستند.
با استفاده از این تمپلیت‌ها، دیگر نیازی به تنظیمات پیچیده و نصب دستی ندارید؛ تمامی مراحل نصب و پیکربندی اولیه به‌صورت خودکار انجام می‌شود.

## مزایای استفاده از تمپلیت‌های بازارچه ویراکلود:

1. نصب سریع و آماده به کار در کمترین زمان ممکن
2. مدیریت ساده سیستم با ابزارهای قدرتمند:
   - **Webmin**: مدیریت کامل سیستم و سرویس‌ها از طریق رابط گرافیکی (برای اطلاعات بیشتر به این [بخش](#webmin) مراجعه کنید.)
   - **Adminer**: مدیریت پایگاه داده‌های MySQL، PostgreSQL و... (برای اطلاعات بیشتر به این [بخش](#adminer) مراجعه کنید.)
   - **Web Shell**: دسترسی امن به ترمینال سرور از طریق مرورگر

3. ارائه نام FQDN به سرور ابری بعد از ایجاد شدن:

بعد از نصب تمپلیت مورد نظر در بازارچه، سرور شما نامی تحت یک ساب دامین مجزا به فرمت <code dir="ltr">85-9-104-4</code> که برگرفته از آدرس آی پی سرور میباشد و همچنین روت دامین `vrak.app` دریافت میکند. این نام به آدرس سرور مپ خواهد شد که علاوه بر آی پی سرور از طریق آن امکان اتصال به سرور و سرویس ها مهیا میشود.
<code dir="ltr">(85-9-104-4.vrak.app)</code>

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/1-appliance-services.jpg"
  light-src="/images/guides/common/instance/marketplace/1-appliance-services.jpg"
  alt="Marketplace - Ready to use Applications"
/>

4. دریافت اتوماتیک Let's Encrypt SSL
   با توجه به دریافت FQDN و پیکربندی های انجام شده در تمپلیت، سرویس مورد نظر از طریق Let's Encrypt یک SSL معتبر دریافت خواهد کرد.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/2-Lets-Encrypt-SSL.png"
  light-src="/images/guides/common/instance/marketplace/2-Lets-Encrypt-SSL.png"
  alt="Marketplace - Ready to use Applications"
/>

5. ارائه امکان پیکربندی از طریق منوی گرافیکی confconsole
   علاوه بر Webmin که امکان پیکربندی سرور و سرویس ها را به صورت جامع به شما ارائه میدهد از طریق دستور confconsole میتوانیم به منو گرافیکی مورد نظر دسترسی داشته و برخی از تنظیمات لازم را به راحتی انجام دهید.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/3-confconsole.jpg"
  light-src="/images/guides/common/instance/marketplace/3-confconsole.jpg"
  alt="Marketplace - Ready to use Applications"
/>

## مراحل نصب و استفاده

::: tip نکته:
در این آموزش سیستم عامل WordPress انتخاب شده است
:::

::: danger توجه:
برخی از نرم افزارها نظیر Gitlab نیاز به منابع بالایی جهت راه اندازی خواهند داشت که این امر موجوب میشود با انتخاب نرم افزار مذکور برخی از پلن ها غیرفعال شوند.
:::

بعد از [ثبت نهایی](#ثبت-نهایی) و قرار گرفتن وضعیت سرور در حالت روشن، تنظیم و پیکربندی اطلاعات مدیریتی و امنیتی نرم افزار مورد نظر می بایست از طریق کاربر انجام شود. برای این منظور برای ادامه روند نصب میبایست وارد تب کنسول در صفحه جزئیات سرور خود شوید.

::: danger توجه:
با توجه به اینکه نرم افزار مورد نظر به چه سرویس هایی نیاز داشته باشد پرسش هایی متعددی از کاربر پرسیده خواهد شد. به عنوان مثال اطلاعات نام کاربری و رمز عبور برای دیتابس، ورود به پنل مدیریتی نرم افزار مورد نظر، آدرس ایمیل و ... .
:::

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/4-mqSql.png"
  light-src="/images/guides/common/instance/marketplace/4-mqSql.png"
  alt="Marketplace - Ready to use Applications"
/>
<br/>
<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/5-rootPassword.png"
  light-src="/images/guides/common/instance/marketplace/5-rootPassword.png"
  alt="Marketplace - Ready to use Applications"
/>
<br/>
<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/6-wordpressPassword.png"
  light-src="/images/guides/common/instance/marketplace/6-wordpressPassword.png"
  alt="Marketplace - Ready to use Applications"
/>

::: info توصیه:
بهتر است مراحل مربوط به آپدیت های امنیتی و دریافت نوتیفیکیش و تنظیمات بک آپ را بعد از نهایی شدن نصب انجام دهید و در این مرحله از آنها عبور کنید.
:::

بعد از ورود اطلاعات، در بخش آخر صفحه ای تحت عنوان اطلاعات ورود به بخش های مختلف سرور ابری به شما ارائه داده میشود.
به عنوان مثال در شکل زیر اطلاعات ورود به صفحه اصلی وب WordPress ، Webmin جهت پیکربندی سرور به صورت تحت وب، Adminer جهت اتصال به دیتابیس، و همچنین SSH جهت انصال به سرور ارائه داده شده است.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/7-wordpress-config.png"
  light-src="/images/guides/common/instance/marketplace/7-wordpress-config.png"
  alt="Marketplace - Ready to use Applications"
/>

## توضیحات بیشتر

### Webmin:

وب‌مین یک پنل مدیریتی تحت وب برای مدیریت سرورهای لینوکسی یا یونیکسی است که به مدیران سیستم اجازه می‌دهد بسیاری از وظایف مدیریتی را بدون نیاز به خط فرمان انجام دهند. که از طریق آدرس و پورت ارائه شده میتوانید به آن متصل شوید.

#### کاربردها:

- مدیریت کاربران و گروه‌ها
- مدیریت سرویس‌ها مثل Apache، NGINX، MySQL و غیره
- ویرایش فایل‌های پیکربندی سیستمی
- مدیریت فایروال (iptables)
- مانیتورینگ منابع سیستم (CPU، RAM، Disk)
- نصب و به‌روزرسانی پکیج‌ها (با استفاده از apt یا yum)

#### مزایا:

- رابط کاربری گرافیکی تحت وب
- کاهش نیاز به تسلط کامل بر دستورات لینوکس
- مناسب برای ادمین‌هایی که از محیط CLI فراری هستند

تصویر زیر نمایی از محیط Webmin میباشد که امکانات بسیاری را برای پیکربندی سرور در اختیار کاربر قرار میدهد.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/8-webmin.jpg"
  light-src="/images/guides/common/instance/marketplace/8-webmin.jpg"
  alt="Marketplace - Ready to use Applications"
/>
<br/>

---

### Adminer:

ادماینر یک ابزار سبک، تک‌فایلی و متن‌باز برای مدیریت پایگاه‌های داده‌ معمولاً (MySQL / MariaDB) از طریق رابط وب است. جایگزین سبک‌تری برای phpMyAdmin محسوب می‌شود. که از طریق آدرس و پورت ارائه شده میتوانید به آن متصل شوید.

#### کاربردها:

- اتصال به پایگاه داده و مشاهده جداول، رکوردها
- اجرای دستورات SQL
- مدیریت کاربران و دسترسی‌ها
- ایمپورت و اکسپورت دیتابیس‌ها
- ایجاد و حذف جداول یا دیتابیس‌ها

#### مزایا:

- تنها یک فایل PHP است (نیاز به نصب پیچیده ندارد)
- سریع و سبک با مصرف کم منابع
- پشتیبانی از پایگاه‌های مختلف: MySQL, PostgreSQL, SQLite, MS SQL, Oracle و...

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/9-adminer.jpg"
  light-src="/images/guides/common/instance/marketplace/9-adminer.jpg"
  alt="Marketplace - Ready to use Applications"
/>

تصویر زیر هم صفحه ورود به بخش `http://85.9.104.4/wp-admin` سرویس ورد پرس را نشان میدهد.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/10-wordpress-login.png"
  light-src="/images/guides/common/instance/marketplace/10-wordpress-login.png"
  alt="Marketplace - Ready to use Applications"
/>
<br/>
<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/11-wordpress-dashboard.png"
  light-src="/images/guides/common/instance/marketplace/11-wordpress-dashboard.png"
  alt="Marketplace - Ready to use Applications"
/>
