# Szybkość strony: poprawki z raportu PageSpeed (05.11.2026)

| | Telefon | Komputer |
|---|---|---|
| Wydajność | **68** | 84 |
| Ułatwienia dostępu | 86 | 86 |
| Sprawdzone metody | 88 | 88 |
| SEO | 100 | 100 |
| Pierwsze wyrenderowanie treści (FCP) | 2,6 s | 0,6 s |
| **Największy element (LCP)** | **11,6 s** | 2,5 s |
| Total Blocking Time | 30 ms | 50 ms |
| CLS | 0,003 | 0,001 |
| Speed Index | 5,0 s | 1,7 s |
| Waga strony | 2,8 MB | 6,4 MB |

SEO ma 100 punktów, czyli od strony technicznej Google widzi stronę poprawnie. Problemem jest **szybkość na telefonie**.

## Co jest największym elementem (LCP)
Sekcja „Ekspresowe naprawy…” na górze strony głównej (`id="slider"`, Elementor `data-id="113c5caf"`).
Ma tło `drlp_zdalna_pomoc.webp` (187 KB) z efektem ruchu, które wczytuje się dopiero po skryptach Elementora. PageSpeed podpowiada: obraz LCP powinien być widoczny od razu w HTML, bez leniwego ładowania, z `fetchpriority="high"`.

## Poprawki, od największego zysku

### 1. Górna sekcja strony głównej (zysk: kilka sekund LCP)
- [ ] W sekcji `113c5caf`: Zaawansowane → Efekty ruchu → **wyłączone**.
- [ ] Tło zamienić na widżet **Obraz** (wtedy WordPress doda `fetchpriority="high"`) albo w wersji mobilnej ustawić samo tło kolorem bez zdjęcia.
- [ ] Zdjęcie przyciąć do ok. 800 px szerokości w wersji mobilnej, WebP poniżej 60 KB.

### 2. Zasoby blokujące renderowanie (zysk wg PageSpeed: ok. 2,4 s)
Blokują: `jquery.min.js`, `post-3840.css`, `lt_detailer/style.css`, `elementor frontend.min.css` i inne.
- [ ] Wtyczka cache (LiteSpeed Cache lub WP Rocket): „Krytyczny CSS”, „Opóźnij JavaScript”, „Łącz i minifikuj CSS/JS”.
- [ ] Elementor → Ustawienia → Funkcje: Improved CSS Loading, Improved Asset Loading, Optimized DOM Output, Inline Font Icons, Lazy Load Background Images.

### 3. Czcionki z ikonami (zysk: ok. 600 KB)
- [ ] `elementskit.woff`: **454 KB**, bez cache. To czcionka z ikonami wtyczki ElementsKit Lite. Jeśli używa się tylko kilku ikon, zamienić je na ikony Elementora lub SVG i wyłączyć ładowanie tej czcionki (albo całą wtyczkę, jeśli nie jest potrzebna).
- [ ] Font Awesome (`fa-brands-400`, `fa-solid-900`): ok. 157 KB. Elementor „Inline Font Icons” wczytuje tylko użyte ikony.
- [ ] Google Fonts: wczytywać lokalnie, tylko Inter 400/600/700, `font-display: swap`.

### 4. Skrypty zewnętrzne
- [ ] **Formilla chat nie działa**: konsola pokazuje błąd CORS przy `formilla.com`. Usunąć pozostałości (wtyczka lub kod w GTM) albo naprawić. Docelowo zastąpi go asystent AI.
- [ ] Google Tag Manager (319 KB) i CookieYes (83 KB): opóźnione ładowanie (do pierwszej interakcji) w wtyczce cache. Sprawdzić, czy w GTM nie ma zbędnych tagów.
- [ ] Nieużywany JavaScript (206 KB) i CSS (73 KB): wyłączyć wtyczki ładowane na stronach, gdzie nie są potrzebne (np. Perfmatters lub Asset CleanUp).

### 5. Cache przeglądarki (zysk: ok. 600 KB przy powrocie na stronę)
- [ ] Zdjęcia i czcionki: czas przechowywania 1 rok zamiast 7 dni (ustawienie wtyczki cache albo `.htaccess` na serwerze).

### 6. Drobne
- [ ] Logotypy partnerów w karuzeli (np. `intel_logo-300x199-1.png`, `g-data-logo.png`) bez `width` i `height`. Dodać wymiary.
- [ ] Ikony Facebook i Instagram w stopce: bez nazw dla czytników ekranu i za małe do kliknięcia palcem. Dodać `aria-label` i powiększyć do 44×44 px.
- [ ] Przycisk wtyczki Buttonizer: za niski kontrast tekstu. Poprawić kolory albo zastąpić paskiem „Zadzwoń / Zamów kuriera”.
- [ ] Brak elementu `<main>` w motywie (punkt ułatwień dostępu, drobny).

## Cel
Telefon: wynik **85+**, LCP **poniżej 2,5 s**. Po każdej zmianie ponowny test na pagespeed.web.dev.
