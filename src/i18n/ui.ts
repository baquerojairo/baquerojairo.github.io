import type { Locale } from '../config/i18n';

export const languages: Record<Locale, string> = {
  es: 'Español'
};

export const defaultLang: Locale = 'es';

export const ui = {
  es: {
    'archive.description': 'Todas las publicaciones ordenadas por fecha de publicación.',
    'archive.filter.all': 'Todo',
    'archive.filter.categories': 'Categorías',
    'archive.filter.empty': 'No hay publicaciones que coincidan con estos filtros.',
    'archive.filter.label': 'Filtrar archivo',
    'archive.filter.tags': 'Etiquetas',
    'archive.results.prefix': 'Mostrando',
    'archive.results.suffix': 'publicaciones',
    'archive.title': 'Archivo',
    'dock.back': 'Atrás',
    'dock.display': 'Ajustes de visualización',
    'dock.display.close': 'Cerrar ajustes de visualización',
    'dock.display.reset': 'Restaurar ancho de página predeterminado',
    'dock.display.width': 'Ancho de página',
    'dock.home': 'Inicio',
    'dock.top': 'Volver arriba',
    'home.featuredProjects': 'Proyectos destacados',
    'home.recentPosts': 'Publicaciones recientes',
    'home.viewAll': 'Ver todo',
    'license.label': 'Licencia',
    'nav.colorMode': 'Cambiar modo de color',
    'nav.language': 'Idioma',
    'nav.menu': 'Menú',
    'nav.search': 'Buscar',
    'nav.theme': 'Tema',
    'notFound.action': 'Volver al inicio',
    'notFound.description': 'La página que buscas no existe.',
    'notFound.title': 'Página no encontrada',
    'posts.description': 'Notas, ensayos y escritos técnicos.',
    'posts.title': 'Publicaciones',
    'postNav.next': 'Siguiente',
    'postNav.navigation': 'Navegación de publicación',
    'postNav.previous': 'Anterior',
    'projects.description': 'Proyectos seleccionados, experimentos y notas de trabajo.',
    'projects.title': 'Proyectos',
    'related.title': 'Publicaciones relacionadas',
    'series.chapterCount': 'capítulos',
    'series.chapters': 'Capítulos',
    'series.description': 'Rutas de lectura ordenadas para un aprendizaje enfocado.',
    'series.empty': 'Aún no hay series publicadas.',
    'series.label': 'Serie',
    'series.latestChapter': 'Último capítulo',
    'series.navigation': 'Navegación de capítulos de la serie',
    'series.nextChapter': 'Siguiente capítulo',
    'series.previousChapter': 'Capítulo anterior',
    'series.title': 'Series',
    'search.close': 'Cerrar búsqueda',
    'search.empty': 'Escribe para empezar a buscar',
    'search.label': 'Buscar',
    'search.loading': 'Cargando índice',
    'search.noResults': 'No se encontraron resultados',
    'search.placeholder': 'Buscar contenido'
  }
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['es'];