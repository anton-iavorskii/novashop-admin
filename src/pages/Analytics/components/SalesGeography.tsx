import { Globe, MapPin } from 'lucide-react'
import { salesCities } from '../analyticsData'
import card from './AnalyticsCard.module.css'
import styles from './SalesGeography.module.css'

function SalesGeography() {
  return (
    <section className={card.card} aria-labelledby="analytics-geography-title">
      <h2 className={card.title} id="analytics-geography-title">География продаж</h2>
      <div className={styles.content}>
        <svg className={styles.map} viewBox="0 0 600 250" role="img" aria-labelledby="analytics-map-title">
          <title id="analytics-map-title">Схематичная карта России с отметками Москвы, Санкт-Петербурга, Казани, Екатеринбурга и Новосибирска</title>
          <defs>
            <path id="analytics-russia-outline" d="M33 87 44 70 40 48 51 33 64 37 70 54 87 70 91 82 104 79 113 91 131 83 144 85 151 67 170 64 176 74 190 66 201 70 204 55 216 61 230 48 235 34 251 28 265 34 268 48 284 48 288 60 308 56 318 66 339 61 351 72 365 70 370 57 389 57 398 45 409 48 419 36 435 35 447 46 461 43 470 55 483 53 493 66 509 62 520 46 538 51 552 45 564 57 558 72 574 78 582 96 567 102 557 91 545 101 528 99 519 112 506 109 499 122 485 126 477 139 478 154 468 172 456 183 453 200 440 216 430 207 430 187 420 174 404 166 391 154 370 162 351 157 339 168 321 173 298 167 282 177 267 178 254 194 236 203 220 201 207 190 188 189 178 176 160 176 146 185 130 180 120 169 107 177 104 193 95 201 90 217 79 222 64 210 59 194 65 180 57 166 43 162 38 149 48 131 39 122 42 109 32 104Z" />
            <clipPath id="analytics-russia-clip"><use href="#analytics-russia-outline" /></clipPath>
          </defs>
          <use href="#analytics-russia-outline" className={styles.land} />
          <g className={styles.regions} clipPath="url(#analytics-russia-clip)">
            <path d="M55 60 82 92 72 113 88 138 67 158 82 187 80 220M105 76 112 108 101 126 126 143 114 171 135 193M147 78 140 108 156 134 141 160 157 184M175 62 183 95 171 123 189 145 182 176M220 55 208 94 227 126 213 158 224 202M266 31 254 79 269 108 255 145 276 177M308 56 299 102 322 132 312 171M355 62 343 107 369 127 360 160M404 45 392 86 413 112 392 151M448 39 435 89 456 116 447 156 452 203M491 53 482 93 505 111M39 108 82 113 113 108 140 108 183 95 208 94 254 79 299 102 343 107 392 86 435 89 482 93M45 154 88 138 126 143 156 134 189 145 213 158 255 145 322 132 369 127 413 112 456 116 480 139" />
          </g>
          <g className={styles.land}>
            <path d="m528 127 9 11 2 22 12 22-4 13-10-17-5-19-9-14zM486 171l5 13-1 21-5 10-3-14zM183 44l11-20 7-3-3 14-8 16zM225 14l16-8 13 6-10 10zM311 33l15-9 10 7-10 10zM379 30l15-9 10 5-9 10z" />
          </g>
          <g className={styles.markers}>
            <circle cx="73" cy="145" r="5"><title>Москва</title></circle>
            <circle cx="67" cy="115" r="4"><title>Санкт-Петербург</title></circle>
            <circle cx="113" cy="155" r="4"><title>Казань</title></circle>
            <circle cx="169" cy="151" r="4"><title>Екатеринбург</title></circle>
            <circle cx="240" cy="178" r="4"><title>Новосибирск</title></circle>
          </g>
        </svg>
        <ul className={styles.cities}>
          {salesCities.map((city, index) => <li key={city.name}><span>{city.name}</span><progress className={index === salesCities.length - 1 ? styles.otherCities : ''} value={city.share} max={100} aria-label={`${city.name}: ${city.share}%`} /><strong>{city.share}%</strong></li>)}
        </ul>
        <div className={styles.totals}>
          <div><span className={styles.icon}><MapPin size={24} strokeWidth={1.8} aria-hidden="true" /></span><p><strong>78</strong><span>Городов</span></p></div>
          <div><span className={styles.icon}><Globe size={24} strokeWidth={1.8} aria-hidden="true" /></span><p><strong>12</strong><span>Стран</span></p></div>
        </div>
      </div>
    </section>
  )
}

export default SalesGeography
