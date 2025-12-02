---
title: A New Game Inspired by Package
date: '2025-12-02'
description: The journey of transforming a simple resource trading game into something much bigger.
---

<script>
    import VideoPlayer from '$lib/components/VideoPlayer.svelte';
</script>

This game has been in development for quite a while, and it's gone through many transformations along the way. Let me take you through its evolution.

## The Early Days

Originally, this game was supposed to launch back in 2024 — and here we are, almost in 2026. It all started because Package felt too simple to us. We thought that just trading empty resources wouldn't be engaging enough for players. So we decided to give those resources actual functionality.

Our first idea was to add crafting recipes and allow players to use items as boosters — or even more interestingly, as weapons to attack other players' buildings.

## A New Direction

Then it hit us: what if we turned Package into a card game? Players would trade cards, upgrade them, craft new ones, and battle each other. We came up with this concept in April 2024. Back then, our design document even had this funny note:

> We tell everyone it's not Package, but it's totally Package.

At that point, it was still a GPS-based game with card battles, where players would build structures and defend them through card combat. But eventually, we decided to drop the GPS element for several reasons:

1. GPS would make it difficult to port the game to PC in the future.
2. GPS and maps don't work well with traditional game engines.
3. Most of our players were from Russia, specifically Moscow, where GPS-based gameplay has become problematic.

## The Final Vision

What we ended up with is a game set on a spherical map featuring point-and-click movement, card battles, and trading. Now let's get to the exciting part — **the gameplay!**

## Gameplay Preview

_Note: This does not represent the quality of the final product._

### Region Selection

The game begins with players choosing their starting region. This only affects your spawn point — you're free to travel to other regions since it's an open world after all.

Thanks to Boris's spherical hashing system, we can divide the map into triangles of various sizes.

<VideoPlayer src="https://cdn.p5ina.dev/videos/clip-1.mp4?v=2" />

### World Navigation

We're not entirely sure if this is the final implementation, but currently movement is simple point-and-click navigation across the map.

<VideoPlayer src="https://cdn.p5ina.dev/videos/clip-5.mp4?v=2" />

### Loot Boxes

Loot boxes are scattered across the map, waiting to be discovered as you explore the world. Opening them rewards you with various cards, though typically weaker ones.

<VideoPlayer src="https://cdn.p5ina.dev/videos/clip-2.mp4?v=2" />

### Inventory and Deck

Your deck can hold up to 5 cards. Currently, inventory size is unlimited, but this will change in future updates.

<VideoPlayer src="https://cdn.p5ina.dev/videos/clip-3.mp4?v=2" />

### Battles

Combat is an auto-battler system where players assemble a deck of 5 cards and watch them fight it out. Cards can have various effects that interact in interesting ways during battle, creating unique synergies and combinations. This system allows players to defend themselves fairly even when they're offline.

<VideoPlayer src="https://cdn.p5ina.dev/videos/clip-4.mp4?v=2" />

## What's Next?

We're working hard to bring this game to life. Here's what we're planning to add:

- **Trading system** — buy, sell, and exchange cards with other players
- **Factories and automation** — build production chains and automate cards gathering
- **Chat and social features** — communicate with other players, form alliances, and compete together

There's still a lot to do — balancing cards, polishing the UI, adding more content, and optimizing performance. But we're excited about where this is heading.

If you have any thoughts, suggestions, or feedback, we'd love to hear from you! Feel free to reach out via email or drop a comment in [Telegram](https://t.me/package_game). Your input helps us shape the game into something players will truly enjoy.

Stay tuned for more devlogs as we continue this journey!
