{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let
  inherit (lib) optional optionals;
  nodejs = nodejs-16_x;
  moz_overlay = import (builtins.fetchTarball https://github.com/mozilla/nixpkgs-mozilla/archive/master.tar.gz);
  nixpkgs = import <nixpkgs> { overlays = [ moz_overlay ]; };
in

mkShell {
  buildInputs = [
    nodejs
    git
    libiconv
    nixpkgs.latest.rustChannels.nightly.rust
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
