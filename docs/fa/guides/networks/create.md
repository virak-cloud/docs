# ساخت شبکه

از طریق [منوی ایجاد شبکه](https://panel.virakcloud.com/instances/network/list?createNetwork=true) کاربر میتواند اقدام به ایجاد [شبکه خصوصی لایه دو](#l2) و [شبکه خصوصی لایه دو + سه](#l3) نماید.

## سوئیچ مجازی (شبکه خصوصی لایه دو) {#l2}
این نوع شبکه صرفا به منظور ایجاد بستر ارتباطی لایه دو ابرک ها استفاده می شود و کاربر با ست کردن آی پی آدرس هایی در یک سابنت بر روی ابرک های متصل به این شبکه میتواند ارتباط داخلی آنها به یکدیگر را برقرار نماید.

<DarkModeImage
  dark-src="/images/guides/fa/dark/networks/create-network-switch.webp"
  light-src="/images/guides/fa/light/networks/create-network-switch.webp"
  alt="Create Virtual Swtich"
/>


## روتر مجازی (شبکه خصوصی لایه دو + لایه سه) {#l3}

به محض ایجاد این نوع شبکه سیستم یک روتر مجازی را که برای کاربر قابل مشاهده نمی باشد، تخصیص می دهد.

<DarkModeImage
  dark-src="/images/guides/fa/dark/networks/create-network-router.webp"
  light-src="/images/guides/fa/light/networks/create-network-router.webp"
  alt="Create Virtual Router"
/>


در این بخش می توانید نامی را برای شبکه خصوصی انتخاب  و رنج شبکه داخلی خود را تعیین کنید.
آدرس آی پی انتخابی در بخش درگاه شبکه به عنوان گیتوی بر روی روتر مجازی شبکه داخلی شما کانفیگ و همچنین ماشین های مجازی داخلی از این رنج با سابنت 24/  آی پی دریافت خواهند کرد.


::: warning نکته :
 در این قسمت شما می توانید یک شبکه دارای سرور ابری با پهنای باند اختصاصی و ترافیک نامحدود ایجاد نمایید.
:::
