export enum ApiRoutes {
    // Registration
    POST_REGISTER = '/register',
    GET_CONFIRM_CODE = '/confirm-code/:code',

    // Auth
    POST_AUTH_USER = '/auth/user',
    POST_AUTH_ADMIN = '/auth/admin',
    POST_AUTH_FACEBOOK = '/auth/facebook',
    POST_LOGOUT_USER = '/logout/user',
    POST_LOGOUT_ADMIN = '/logout/admin',

    // User Sessions
    GET_USER_SESSIONS = '/user-sessions',
    DELETE_USER_SESSIONS = '/user-sessions',

    // Admin Sessions
    GET_ADMIN_SESSIONS = '/admin-sessions',
    DELETE_ADMIN_SESSIONS = '/admin-sessions',

    // Users
    GET_USERS = '/users',
    GET_USERS_ME = '/users/me',
    GET_USERS_BY_ID = '/users/:id',
    POST_USERS_FACEBOOK = '/users/facebook',
    DELETE_USERS_FACEBOOK_BY_ID = '/users/facebook/:facebookId',
    PUT_USERS_PASSWORD = '/users/password',

    // Admins
    GET_ADMINS = '/admins',
    GET_ADMINS_ME = '/admins/me',
    GET_ADMINS_BY_ID = '/admins/:id',
    PUT_ADMINS_PASSWORD = '/admins/password',

    // Favourite HashTags
    GET_FAVOURITE_HASHTAGS = '/favorite-hashtags/:instagramId',
    POST_FAVOURITE_HASHTAGS = '/favorite-hashtags/:instagramId',
    DELETE_FAVOURITE_HASHTAGS = '/favorite-hashtags/:instagramId',
    PUT_FAVOURITE_HASHTAGS = '/favorite-hashtags/:instagramId/:blockName',

    // HashTag Tasks
    GET_HASHTAG_TASKS = '/hashtag-tasks/instagram/:instagramId',
    POST_HASHTAG_TASKS = '/hashtag-tasks/instagram/:instagramId',
    GET_HASHTAG_TASKS_BY_ID = '/hashtag-tasks/:id',
    POST_HASHTAG_TASKS_BY_ID_CANCEL = '/hashtag-tasks/:id/cancel',
    POST_HASHTAG_TASKS_BY_ID_SORT_BLOCKS = '/hashtag-tasks/:id/sort-blocks',
    POST_HASHTAG_TASKS_BY_ID_CANCEL_BLOCK = '/hashtag-tasks/:id/:blockName/cancel',
    PUT_HASHTAG_TASKS_BLOCK_BY_ID = '/hashtag-tasks/:id/:blockName/hashtags',

    // Instagram
    GET_INSTAGRAM_MEDIAS_BY_ID = '/instagram/media/:instagramId',
    GET_INSTAGRAM_TOP_HASHTAGS_BY_HASHTAG = '/instagram/top-hashtags',

    // Media Tasks
    GET_MEDIA_TASKS_BY_ID = '/media-tasks/:id',
    PUT_MEDIA_TASKS_BY_ID = '/media-tasks/:id',
    POST_MEDIA_TASKS_BY_ID_CANCEL = '/media-tasks/:id/cancel',
    DELETE_MEDIA_TASKS_BY_ID = '/media-tasks/:id',
    GET_MEDIA_TASKS_BY_INSTAGRAM_BY_ID = '/media-tasks/instagram/:instagramId',
    POST_MEDIA_TASKS_BY_INSTAGRAM_BY_ID = '/media-tasks/instagram/:instagramId',

    // Commenting Subtasks
    GET_COMMENT_SUBTASKS_BY_ID = '/comment-subtasks/:commentTaskId',

    // Comment Tasks
    GET_COMMENT_TASKS_BY_INSTAGRAM_ID = '/comment-tasks/instagram/:instagramId',
    POST_COMMENT_TASKS_BY_INSTAGRAM_ID = '/comment-tasks/instagram/:instagramId',
    GET_COMMENT_TASKS_BY_ID = '/comment-tasks/:id',
    POST_COMMENT_TASKS_BY_ID_CANCEL = '/comment-tasks/:id/cancel',

    // AI
    POST_AI_GET_RESULT = '/ai/text',

    // User Purchases
    GET_USER_PURCHASES = '/user-purchases',
    POST_USER_PURCHASES = '/user-purchases',
}
