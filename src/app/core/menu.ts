const menu = {
    admin: [
        { label: 'Dashboard', link: '/admin/dashboard' },
        { label: 'Users', link: '/admin/users' },
        { label: 'New User', link: '/admin/user-registration' },
        { label: 'Courses', link: '/admin/courses' },
        { label: 'Chapters', link: '/admin/chapters' },
        { label: 'New Batch', link: '/admin/new-batch' }
        
    ],

    user: [
        { label: 'Dashboard', link: '/user/dashboard' },
        { label: 'Account', link: '/user/account' },
        { label: 'Courses', link: '/user/courses' },
    ]
};

export function getAdminMenu() {
    return menu.admin;
}

export function getUserMenu() {
    return menu.user;
}