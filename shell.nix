{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let
  inherit (lib) optional optionals;
  nodejs = nodejs-16_x;
  rust_overlay = import (builtins.fetchTarball https://github.com/oxalica/rust-overlay/archive/master.tar.gz);
  nixpkgs = import <nixpkgs> { overlays = [ rust_overlay ]; };
in

mkShell {
  buildInputs = [
    nodejs
    git
    libiconv
    nixpkgs.rust-bin.stable.latest.default
  ]
  ++ optional stdenv.isLinux inotify-tools # For file_system on Linux.
  ++ optionals stdenv.isDarwin (with darwin.apple_sdk.frameworks; [
    # For file_system on macOS.
    CoreFoundation
    CoreServices
    AppKit
  ]);

  RUSTFLAGS = "-C link-arg=-undefined -C link-arg=dynamic_lookup";
}
