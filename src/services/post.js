export const listPosts = async () => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            id: i,
            title: `ant design part ${i}`,
            content: 'We supply a series of d principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(listData);
        }, 2000);
    })
}

export const createPost = async () => { }

export const deletePost = async () => { }

export const getSinglePost = async (postId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: 'ant design part',
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non libero eget quam dictum ultrices. Praesent condimentum nisl libero, id pharetra metus volutpat sit amet. Mauris interdum tortor et neque scelerisque dignissim. Maecenas ultrices semper erat nec tincidunt. Donec vitae metus efficitur, euismod tortor a, maximus diam. Donec suscipit interdum lorem, dignissim venenatis arcu aliquet sed. Vivamus dictum placerat libero, a hendrerit elit eleifend eget. Ut et augue libero. Etiam in ultrices tellus. Vivamus congue, lacus sed aliquet eleifend, orci leo convallis felis, et dictum erat felis quis diam. Aenean in cursus justo, vitae ornare odio. Nulla malesuada ipsum sit amet sem suscipit pulvinar. Praesent elementum pharetra nunc, in vehicula nisi scelerisque ac. Praesent id elementum purus. Etiam consectetur dignissim sem, quis congue felis vehicula ultrices.

Fusce mattis lorem sem, ut pulvinar justo commodo at. Pellentesque quis maximus urna. Ut neque lectus, convallis sit amet cursus quis, pharetra eu lacus. Maecenas nec dolor sed risus hendrerit tincidunt. Pellentesque vel gravida tortor, eu semper dui. Maecenas tincidunt imperdiet tincidunt. Quisque pulvinar leo mattis lacus vehicula condimentum. Fusce eros lacus, pharetra non auctor rhoncus, dapibus eget elit. Mauris nec neque ex. Fusce suscipit nec sapien sed lobortis.

Ut sed placerat felis. Sed vel tincidunt velit, id luctus nisi. Ut rutrum congue massa, ac euismod felis facilisis sit amet. Pellentesque sem orci, varius a erat sit amet, aliquet ultricies nunc. Vivamus vitae tellus ornare est scelerisque placerat nec in nisi. Nam tincidunt neque vel nisi venenatis, a hendrerit nisi sodales. Vivamus nec mattis neque, ut porttitor ex. Vivamus non imperdiet tellus. In hac habitasse platea dictumst. Nam eget tempor sapien. Nulla in fermentum turpis, nec efficitur odio. Curabitur sit amet scelerisque tortor. Integer ullamcorper, sem in commodo condimentum, diam ante molestie neque, et elementum quam sem sit amet metus. Donec nisi est, congue vitae leo at, mollis dignissim erat.

Maecenas eget enim molestie, maximus leo eget, pharetra justo. Suspendisse consectetur neque condimentum sapien consequat, ut vestibulum ante bibendum. Nam elementum mi sit amet eros volutpat, quis vulputate purus pulvinar. Nam vitae condimentum lacus, at sagittis tellus. Nam quis tellus et tortor commodo viverra. Pellentesque a bibendum ligula. Etiam commodo aliquet nibh sed imperdiet. Sed ullamcorper nisi quis enim commodo, nec imperdiet dui porttitor. Pellentesque quis accumsan magna. Donec sit amet est scelerisque metus aliquet blandit et et diam. Morbi sem nibh, bibendum bibendum ligula non, interdum molestie nunc. Donec sodales eu tellus a finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Pellentesque ornare eget odio nec molestie. Vivamus semper sollicitudin eros, eget tincidunt quam iaculis sed. Nam bibendum dui quis nulla convallis mattis. Suspendisse ultricies tortor vel varius luctus. Duis imperdiet vitae odio a eleifend. Nullam ut semper quam. Quisque blandit facilisis lacus a hendrerit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non libero eget quam dictum ultrices. Praesent condimentum nisl libero, id pharetra metus volutpat sit amet. Mauris interdum tortor et neque scelerisque dignissim. Maecenas ultrices semper erat nec tincidunt. Donec vitae metus efficitur, euismod tortor a, maximus diam. Donec suscipit interdum lorem, dignissim venenatis arcu aliquet sed. Vivamus dictum placerat libero, a hendrerit elit eleifend eget. Ut et augue libero. Etiam in ultrices tellus. Vivamus congue, lacus sed aliquet eleifend, orci leo convallis felis, et dictum erat felis quis diam. Aenean in cursus justo, vitae ornare odio. Nulla malesuada ipsum sit amet sem suscipit pulvinar. Praesent elementum pharetra nunc, in vehicula nisi scelerisque ac. Praesent id elementum purus. Etiam consectetur dignissim sem, quis congue felis vehicula ultrices.

Fusce mattis lorem sem, ut pulvinar justo commodo at. Pellentesque quis maximus urna. Ut neque lectus, convallis sit amet cursus quis, pharetra eu lacus. Maecenas nec dolor sed risus hendrerit tincidunt. Pellentesque vel gravida tortor, eu semper dui. Maecenas tincidunt imperdiet tincidunt. Quisque pulvinar leo mattis lacus vehicula condimentum. Fusce eros lacus, pharetra non auctor rhoncus, dapibus eget elit. Mauris nec neque ex. Fusce suscipit nec sapien sed lobortis.

Ut sed placerat felis. Sed vel tincidunt velit, id luctus nisi. Ut rutrum congue massa, ac euismod felis facilisis sit amet. Pellentesque sem orci, varius a erat sit amet, aliquet ultricies nunc. Vivamus vitae tellus ornare est scelerisque placerat nec in nisi. Nam tincidunt neque vel nisi venenatis, a hendrerit nisi sodales. Vivamus nec mattis neque, ut porttitor ex. Vivamus non imperdiet tellus. In hac habitasse platea dictumst. Nam eget tempor sapien. Nulla in fermentum turpis, nec efficitur odio. Curabitur sit amet scelerisque tortor. Integer ullamcorper, sem in commodo condimentum, diam ante molestie neque, et elementum quam sem sit amet metus. Donec nisi est, congue vitae leo at, mollis dignissim erat.

Maecenas eget enim molestie, maximus leo eget, pharetra justo. Suspendisse consectetur neque condimentum sapien consequat, ut vestibulum ante bibendum. Nam elementum mi sit amet eros volutpat, quis vulputate purus pulvinar. Nam vitae condimentum lacus, at sagittis tellus. Nam quis tellus et tortor commodo viverra. Pellentesque a bibendum ligula. Etiam commodo aliquet nibh sed imperdiet. Sed ullamcorper nisi quis enim commodo, nec imperdiet dui porttitor. Pellentesque quis accumsan magna. Donec sit amet est scelerisque metus aliquet blandit et et diam. Morbi sem nibh, bibendum bibendum ligula non, interdum molestie nunc. Donec sodales eu tellus a finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Pellentesque ornare eget odio nec molestie. Vivamus semper sollicitudin eros, eget tincidunt quam iaculis sed. Nam bibendum dui quis nulla convallis mattis. Suspendisse ultricies tortor vel varius luctus. Duis imperdiet vitae odio a eleifend. Nullam ut semper quam. Quisque blandit facilisis lacus a hendrerit.
                `,
                comments: [
                    {
                        author: 'Han Solo',
                        content: (
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                                efficiently.
                            </p>
                        ),
                        datetime: '9/11/2001',
                    },
                    {
                        author: 'Han Solo',
                        content: (
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                                efficiently.
                            </p>
                        ),
                        datetime: '9/11/2001',
                    },
                ]
            });
        }, 2000);
    })
}