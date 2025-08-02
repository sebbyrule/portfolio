const e=`---
title: Getting Started With My First Homelab
date: 2025-08-02
excerpt: Follow my journey as a networking novice building a first homelab. Learn about planning, the hardware and software I used, the challenges I faced, and the essential first services you can set up today.
---
# Getting Started With My First Homelab

If you've ever been curious about what really happens on a network, or if you've wanted to take control of your own data and services, then you've probably stumbled upon the idea of a "homelab." I recently took the plunge myself, and I wanted to share my experience—the triumphs, the "uh-oh" moments, and the lessons learned. My primary goal was straightforward: set up some services to finally learn about networking, cloud services, Git, and reverse proxies. This is the story of how I got started.

### Step 1: The Plan is Everything (Seriously)

Before plugging in a single cable, I cannot stress this enough: **take time to plan**. I started by doing some research into the services I wanted to run and taking inventory of the hardware I already had on hand.

Then, I did something that saved me countless headaches: I drew a diagram.

<img src="/portfolio/NetworkDiagram.jpg" alt="A network diagram showing the author's homelab setup, including a router, switch, wired devices in a VLAN, and WiFi devices." />

Having a visual map like this is invaluable. When you're deep in a configuration file, trying to remember which device has which IP address, a quick glance at your diagram can keep you on track. My plan involved two main network segments: a wired VLAN group for my core services and a Wi-Fi network for my desktop and another project Pi.
### My Gear and Software Stack

You don't need a massive server rack to get started. My setup is pretty modest, built mostly from hardware I already owned.

**Hardware:**

- A TP-Link Smart Switch
    
- Two Raspberry Pi 4s
    
- A mini PC (which I call "smallbox")
    
- My main Windows 11 PC
    
- A router capable of running custom firmware
    

**Software:**

- OpenWrt on my router for powerful network control
    
- Ubuntu and Raspberry Pi OS on my servers
    
- Docker and Docker Desktop for containerization
    

### Step 2: Bringing the Lab to Life, One Step at a Time

With a plan in hand, I started building. My approach was to iterate gradually, making sure each new addition didn't break what I had already set up. Recording your steps is crucial here; if something goes wrong, you have a breadcrumb trail to follow for troubleshooting.

Here’s the path I took:

1. **Router First:** I flashed my router with OpenWrt. This gave me granular control over my network. The first tasks were enabling Wi-Fi and setting up static IP addresses for all my lab devices to ensure they were always reachable at the same address. For example, my OpenWrt router is at \`$192.168.1.1$\` and my smart switch is at \`$192.168.1.10$\`.
    
2. **Enter Docker:** Next, I installed Docker. To make management easier, I installed the Portainer extension on Docker Desktop on my Windows PC and then deployed the Portainer agent on my other Docker machines. This gives me a fantastic web interface to manage all my applications from one place, located at \`$portainer.desktop.lan:9000$\`.
    
3. **Deploying Services:** Now for the fun part! I started spinning up my first set of applications using Docker. I chose a few popular ones to get my feet wet:
    
    - **Gitea:** A self-hosted Git service, running at \`$gitea.smallbox.lan:3000$\`.
        
    - **Nextcloud:** A personal cloud for files and more, running at \`$nextcloud.smallbox.lan:8080$\`.
        
    - **Nginx Proxy Manager:** To manage access to all my services without memorizing ports.
        
    - **Homarr:** A slick dashboard to keep links to all my new services in one place.
        
    - I also experimented with **OpenWebUI** for using local AI and **n8n** for automation.
        
4. **Network Segmentation:** Finally, I configured VLANs on my router and smart switch to separate my lab network from the rest of my home network.
    

### Lessons Learned: The Hard (But Valuable) Way

It wouldn't be a true learning experience without a few roadblocks. Troubleshooting is a skill, and I got to practice it—a lot.

My biggest challenge was simply the steep learning curve. You'll find plenty of guides online that promise a simple copy-paste will get you running, but it rarely works out that way when you're a beginner. There's a whole new vocabulary of esoteric parameters to learn.

My solution? Sheer stubbornness, and one piece of advice I will now shout from the rooftops: **MAKE BACKUPS OF YOUR CONFIG FILES**. I learned this the hard way. While trying to configure a DNS server, I made a small change that knocked my entire home internet offline for half a day. A simple backup of the working configuration file would have saved me a massive headache.

Another lesson was in managing expectations. I was excited about Nextcloud, but I quickly found that my mini PC wasn't powerful enough to run its document editor smoothly. This is a key part of the process: using your services reveals their real-world performance. I'm now planning to switch to a lighter-weight cloud service like File Browser.

### What's Next on the Horizon?

This project is far from over—and that’s what makes it so exciting! Having a working homelab is not the end goal; it's the beginning. Now I can use Gitea to store my Docker Compose files and use my other services daily.

My next steps are already planned out:

- **A rock-solid backup system.** This is now my number one priority.
    
- Proper network monitoring to see what's happening under the hood.
    
- Setting up proper SSL certificates and fine-tuning my reverse proxy setup.
    
- Dipping my toes into the world of smart home and IoT devices.
    

Building this homelab has been an incredibly rewarding experience. If you're on the fence, I hope my story encourages you to jump in. Start small, be patient, document everything, and don't be afraid to break things (just make sure you have a backup!).

---

**What was your first homelab project, or what's a service you think I should try next? Share your thoughts in the comments below!**`;export{e as default};
