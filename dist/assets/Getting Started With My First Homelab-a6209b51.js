import{j as e}from"./index-b0d7ccbd.js";const i={title:"Getting Started With My First Homelab",date:"2025-08-02",excerpt:"Follow my journey as a networking novice building a first homelab. Learn about planning, the hardware and software I used, the challenges I faced, and the essential first services you can set up today."};function s(r){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Getting Started With My First Homelab"}),`
`,e.jsx(n.p,{children:`If you've ever been curious about what really happens on a network, or if you've wanted to take control of your own data and services, then you've probably stumbled upon the idea of a "homelab." I recently took the plunge myself, and I wanted to share my experience—the triumphs, the "uh-oh" moments, and the lessons learned. My primary goal was straightforward: set up some services to finally learn about networking, cloud services, Git, and reverse proxies. This is the story of how I got started.`}),`
`,e.jsx(n.h3,{children:"Step 1: The Plan is Everything (Seriously)"}),`
`,e.jsxs(n.p,{children:["Before plugging in a single cable, I cannot stress this enough: ",e.jsx(n.strong,{children:"take time to plan"}),". I started by doing some research into the services I wanted to run and taking inventory of the hardware I already had on hand."]}),`
`,e.jsx(n.p,{children:"Then, I did something that saved me countless headaches: I drew a diagram."}),`
`,e.jsx("img",{src:"/portfolio/NetworkDiagram.jpg",alt:"A network diagram showing the author's homelab setup, including a router, switch, wired devices in a VLAN, and WiFi devices."}),`
`,e.jsx(n.p,{children:"Having a visual map like this is invaluable. When you're deep in a configuration file, trying to remember which device has which IP address, a quick glance at your diagram can keep you on track. My plan involved two main network segments: a wired VLAN group for my core services and a Wi-Fi network for my desktop and another project Pi."}),`
`,e.jsx(n.h3,{children:"My Gear and Software Stack"}),`
`,e.jsx(n.p,{children:"You don't need a massive server rack to get started. My setup is pretty modest, built mostly from hardware I already owned."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Hardware:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"A TP-Link Smart Switch"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Two Raspberry Pi 4s"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'A mini PC (which I call "smallbox")'}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"My main Windows 11 PC"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"A router capable of running custom firmware"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Software:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"OpenWrt on my router for powerful network control"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ubuntu and Raspberry Pi OS on my servers"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Docker and Docker Desktop for containerization"}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{children:"Step 2: Bringing the Lab to Life, One Step at a Time"}),`
`,e.jsx(n.p,{children:"With a plan in hand, I started building. My approach was to iterate gradually, making sure each new addition didn't break what I had already set up. Recording your steps is crucial here; if something goes wrong, you have a breadcrumb trail to follow for troubleshooting."}),`
`,e.jsx(n.p,{children:"Here’s the path I took:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Router First:"})," I flashed my router with OpenWrt. This gave me granular control over my network. The first tasks were enabling Wi-Fi and setting up static IP addresses for all my lab devices to ensure they were always reachable at the same address. For example, my OpenWrt router is at ",e.jsx(n.code,{children:"$192.168.1.1$"})," and my smart switch is at ",e.jsx(n.code,{children:"$192.168.1.10$"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Enter Docker:"})," Next, I installed Docker. To make management easier, I installed the Portainer extension on Docker Desktop on my Windows PC and then deployed the Portainer agent on my other Docker machines. This gives me a fantastic web interface to manage all my applications from one place, located at ",e.jsx(n.code,{children:"$portainer.desktop.lan:9000$"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Deploying Services:"})," Now for the fun part! I started spinning up my first set of applications using Docker. I chose a few popular ones to get my feet wet:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gitea:"})," A self-hosted Git service, running at ",e.jsx(n.code,{children:"$gitea.smallbox.lan:3000$"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nextcloud:"})," A personal cloud for files and more, running at ",e.jsx(n.code,{children:"$nextcloud.smallbox.lan:8080$"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nginx Proxy Manager:"})," To manage access to all my services without memorizing ports."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Homarr:"})," A slick dashboard to keep links to all my new services in one place."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["I also experimented with ",e.jsx(n.strong,{children:"OpenWebUI"})," for using local AI and ",e.jsx(n.strong,{children:"n8n"})," for automation."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Network Segmentation:"})," Finally, I configured VLANs on my router and smart switch to separate my lab network from the rest of my home network."]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{children:"Lessons Learned: The Hard (But Valuable) Way"}),`
`,e.jsx(n.p,{children:"It wouldn't be a true learning experience without a few roadblocks. Troubleshooting is a skill, and I got to practice it—a lot."}),`
`,e.jsx(n.p,{children:"My biggest challenge was simply the steep learning curve. You'll find plenty of guides online that promise a simple copy-paste will get you running, but it rarely works out that way when you're a beginner. There's a whole new vocabulary of esoteric parameters to learn."}),`
`,e.jsxs(n.p,{children:["My solution? Sheer stubbornness, and one piece of advice I will now shout from the rooftops: ",e.jsx(n.strong,{children:"MAKE BACKUPS OF YOUR CONFIG FILES"}),". I learned this the hard way. While trying to configure a DNS server, I made a small change that knocked my entire home internet offline for half a day. A simple backup of the working configuration file would have saved me a massive headache."]}),`
`,e.jsx(n.p,{children:"Another lesson was in managing expectations. I was excited about Nextcloud, but I quickly found that my mini PC wasn't powerful enough to run its document editor smoothly. This is a key part of the process: using your services reveals their real-world performance. I'm now planning to switch to a lighter-weight cloud service like File Browser."}),`
`,e.jsx(n.h3,{children:"What's Next on the Horizon?"}),`
`,e.jsx(n.p,{children:"This project is far from over—and that’s what makes it so exciting! Having a working homelab is not the end goal; it's the beginning. Now I can use Gitea to store my Docker Compose files and use my other services daily."}),`
`,e.jsx(n.p,{children:"My next steps are already planned out:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"A rock-solid backup system."})," This is now my number one priority."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Proper network monitoring to see what's happening under the hood."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Setting up proper SSL certificates and fine-tuning my reverse proxy setup."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Dipping my toes into the world of smart home and IoT devices."}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Building this homelab has been an incredibly rewarding experience. If you're on the fence, I hope my story encourages you to jump in. Start small, be patient, document everything, and don't be afraid to break things (just make sure you have a backup!)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"What was your first homelab project, or what's a service you think I should try next? Share your thoughts in the comments below!"})})]})}function o(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{o as default,i as frontmatter};
