## Frontend Feature Sliced Design (FSD)

A React + Typescript project built by using FSD architecture

> This project is still in progress, therefore information of this file will be completed soon.


- Here will be a link to the working app
- Here will be a link to the post about it
- Here will be a link to the Backend repo

## Table of Contents

- [Things to Consider](#things-to-consider)
    - [Shared Kernel](#shared-kernel)
    - [Base URL](#base-url)
- [Shared](#shared)
- [Entities](#entities)
- [Features](#features)
- [Widgets](#widgets)
- [Pages](#pages)
- [Processes](#processes)
- [App](#app)

<a name="things-to-consider"></a>

## Things to Consider

There are a few compromises and simplifications in the code that are worth to be mentioned.

<a name="shared-kernel"></a>

### Shared Kernel

Shared Kernel is the code and data on which any modules can depend, but only if this dependency would not increase
coupling. More details about the limitations and application are well described in the article ["DDD, Hexagonal, Onion,
Clean, CQRS, ... How I put it all together"](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/).

In this application, the shared kernel includes global type annotations that can be accessed anywhere in the app and by
any module. Such types are collected
in [`shared-kernel.d.ts`](https://github.com/nnniyaz/blog/blob/master/src/shared-kernel.d.ts).

<a name="base-url"></a>

### Base URL

In your tsconfig.json file, you can add `"baseUrl": "src",` to the compilerOptions. This will allow you to import files
from the src folder without using relative paths.

For example, you can import `components/Button` instead of `../../components/Button`.

## Shared

> Will be described soon.

## Entities

> Will be described soon.

## Features

> Will be described soon.

## Widgets

> Will be described soon.

## Pages

> Will be described soon.

## Processes

> Will be described soon.

## App

> Will be described soon.
