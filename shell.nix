{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let
  inherit (lib) optional optionals;
  nodejs = nodejs-16_x;
in

mkShell {
  buildInputs = [
    nodejs
    git
    nodePackages.ganache-cli
  ]
  ++ optional stdenv.isLinux inotify-tools # For file_system on Linux.
  ++ optionals stdenv.isDarwin (with darwin.apple_sdk.frameworks; [
    # For file_system on macOS.
    CoreFoundation
    CoreServices
  ]);
}
