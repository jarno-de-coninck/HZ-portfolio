export default function navigation(active) {
    return `
    <nav class="py-3 d-flex justify-content-center align-items-center position-fixed w-100 z-2">
        <ul class="list-unstyled d-flex gap-5 m-0">
            <li> 
                <a class="${active === 'home' ? 'active' : ''}" href="${active === 'blog-post' ? '../' : ''}index.html">Home</a>
            </li>
            <li>
                <a class="${active === 'profile' ? 'active' : ''}" href="${active === 'blog-post' ? '../' : ''}profile.html">Profile</a>
            </li>
            <li>
                <a class="${active === 'dashboard' ? 'active' : ''}" href="${active === 'blog-post' ? '../' : ''}dashboard.html">Dashboard</a>
            </li>
            <li>
                <a class="${active === 'faq' ? 'active' : ''}" href="${active === 'blog-post' ? '../' : ''}faq.html">FAQ</a>
            </li>
            <li>
                <a class="${active === 'blog' || active === 'blog-post' ? 'active' : ''}" href="${active === 'blog-post' ? '../' : ''}blog.html">Blog</a>
            </li>
        </ul>
    </nav>
    `;
}

