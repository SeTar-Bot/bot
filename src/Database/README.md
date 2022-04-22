# Database Module

## Table of Contents
- [Connection](#connection)
- [Sync](#sync)
- [Cache](#cache)
- [Schema & Models](#schema--models)
- [Manager Classes](#classes)
- [Questions](#community-and-discussion)

### Connection
Database class connects to [URI variable that exist on environment](https://github.com/SeTar-Bot/bot/blob/main/example.env#L3)

### Sync
Database module automaticly fetches every stored guilds and every discord guild, check if any is removed or added.

### Cache
All of our Database [Manager Classes](#classes) has Cache Manager built-in for better performence, so don't worry about making API Calls.

However, you can fetch any User/Guild with `fetch` method to skip checking cache.

### Schema & Models
All of Schema and Model types are linked for generic types and better exprience in IDE for Developers, you change your Schema in [Schema Directory](https://github.com/SeTar-Bot/bot/tree/main/src/Database/Schemas) and Interfaces of them in [Database Type file](https://github.com/SeTar-Bot/bot/blob/main/types/database.ts)

### Classes
For easier access and not duplicating same code, we created [Manager Classes](https://github.com/SeTar-Bot/bot/tree/main/src/Database/Classes) which has some methods in them such as `add`, `remove`, `fetch` and `update`

You can refere to each to see how they work or update what you want to do.

## Community and Discussion
Feel free to [Join our Discord Community](https://discord.gg/7jgfP6j4Tc) or Ask your question in [Database Discussion](https://github.com/SeTar-Bot/bot/discussions/61)