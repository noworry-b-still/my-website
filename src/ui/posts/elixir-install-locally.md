# How to Install Elixir Locally on Your Computer

##### Date: 10 October, 2024

##### By Dinesh Pandikona

Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It runs on the Erlang Virtual Machine (BEAM), known for its low-latency, distributed, and fault-tolerant systems. This blog post will guide you through the steps to install Elixir on your local computer.

## Prerequisites

Before you begin the installation, make sure you have the following prerequisites:

- A computer running Windows, macOS, or a Linux-based operating system.
- Basic knowledge of using the command line or terminal.

## Installing Elixir

### 1. Install Erlang

Elixir requires Erlang to function. You need to install Erlang first. Follow the instructions below based on your operating system:

#### For macOS:

You can easily install Erlang using Homebrew. Open your terminal and run the following command:

```bash
brew install erlang
```

#### For Ubuntu/Linux:

You can install Erlang using `apt`. Open your terminal and run the following commands:

```bash
sudo apt update
sudo apt install erlang
```

#### For Windows:

1.  Download the Erlang installer from the official Erlang website: [Erlang Downloads](https://www.erlang.org/downloads).
2.  Run the installer and follow the instructions to complete the installation.

### 2. Install Elixir

Once Erlang is installed, you can proceed to install Elixir. Use the instructions below based on your operating system:

#### For macOS:

You can install Elixir using Homebrew. Run the following command in your terminal:

```bash
brew install elixir
```

#### For Ubuntu/Linux:

You can install Elixir using `apt`. First, you need to add the Elixir repository:

```bash
sudo apt-add-repository ppa:elixir-lang/ppa
sudo apt update
sudo apt install elixir
```

#### For Windows:

1.  Download the Elixir installer from the official Elixir website: [Elixir Downloads](https://elixir-lang.org/install.html).
2.  Run the installer and follow the instructions to complete the installation.

### 3. Verify the Installation

After the installation is complete, you can verify that Elixir is installed correctly by running the following command in your terminal:

```bash
elixir -v
```

This command should output the version of Elixir that you installed.

### 4. Create a Simple Elixir Project

To ensure everything is working correctly, you can create a simple Elixir project:

1.  Create a new directory for your project:

    ```bash
    mkdir my_elixir_project
    cd my_elixir_project
    ```

2.  Create a new Elixir file named `hello.exs` and open it in a text editor:

    ```bash
    touch hello.exs
    ```

3.  Add the following code to `hello.exs`:

    ```Elixir
    IO.puts "Hello, Elixir!"
    ```

4.  Run the Elixir file:

    ```bash
    elixir hello.exs
    ```

You should see the output:

```bash
> Hello, Elixir!
```

## Conclusion

Congratulations! You have successfully installed Elixir on your computer and created a simple project. You can now start building scalable and maintainable applications with Elixir. Happy coding!
