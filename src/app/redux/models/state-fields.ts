export enum StateFields {
    SETTINGS = 'SETTINGS',
    APP_CONFIG_GENERAL = 'APP_CONFIG_GENERAL',
    APP_CONFIG_LANGUAGE = 'APP_CONFIG_LANGUAGE',
    APP_CONFIG_USER_MENU = 'APP_CONFIG_USER_MENU',
    APP_CONFIG_THEME = 'APP_CONFIG_THEME',
    APP_CONFIG_ADMIN = 'APP_CONFIG_ADMIN',
    APP_CARRIAGES = 'APP_CARRIAGES',
    APP_STATIONS = 'APP_STATIONS',
    APP_ROUTES = 'APP_ROUTES',
    APP_USER = 'APP_USER',
}

export enum AppConfigFields {
    SIDEBAR_MENU = 'SIDEBAR_MENU',
    HEADER_MENU = 'HEADER_MENU',
    SHOW_LOADER = 'SHOW_LOADER',
}

export enum AppAdminFields {
    ADMIN_MENU = 'ADMIN_MENU',
    ADMIN_MENU_OPEN = 'ADMIN_MENU_OPEN',
    ADMIN_MENU_AVAILABLE = 'ADMIN_MENU_AVAILABLE',
}

export enum AppCarriageFields {
    SHOW_CARRIAGE_FORM = 'SHOW_CARRIAGE_FORM',
    CARRIAGE_FORM_MODE = 'CARRIAGE_FORM_MODE',
    EDIT_CARRIAGE = 'EDIT_CARRIAGE',
    CARRIAGES = 'CARRIAGES',
}

export enum AppStationFields {
    SHOW_STATION_FORM = 'SHOW_STATION_FORM',
    STATION_FORM_MODE = 'STATION_FORM_MODE',
    EDIT_STATION = 'EDIT_STATION',
    STATIONS = 'STATIONS',
    CURRENT_PAGE = 'CURRENT_PAGE',
    PAGE_SIZE = 'PAGE_SIZE',
}

export enum AppRouteFields {
    SHOW_ROUTE_FORM = 'SHOW_ROUTE_FORM',
    ROUTE_FORM_MODE = 'ROUTE_FORM_MODE',
    EDIT_ROUTE = 'EDIT_ROUTE',
    STATIONS = 'STATIONS',
    ROUTES = 'ROUTES',
    CARRIAGES = 'CARRIAGES',
    CURRENT_PAGE = 'CURRENT_PAGE',
    PAGE_SIZE = 'PAGE_SIZE',
}

export enum AppLanguageFields {
    LANGUAGE_MENU = 'LANGUAGE_MENU',
    LANGUAGE_MENU_OPEN = 'LANGUAGE_MENU_OPEN',
    DEFAULT_LANGUAGE = 'DEFAULT_LANGUAGE',
}

export enum AppThemeFields {
    COLOR_SCHEME = 'COLOR_SCHEME',
    THEME = 'THEME',
}

export enum AppUserFields {
    USER_EMAIL = 'USER_EMAIL',
    USER_NAME = 'USER_NAME',
    USER_TOKEN = 'USER_TOKEN',
    USER_ROLE = 'USER_ROLE',
}
