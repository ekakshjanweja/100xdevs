#include <cstring>
#include <iostream>
#include <netinet/in.h>
#include <sstream>
#include <string>
#include <sys/socket.h>
#include <unistd.h>
using namespace std;

const int PORT = 8080;

void handleRequest(int clientSocket) {
  // Read the HTTP request
  char buffer[1024];
  memset(buffer, 0, sizeof(buffer));
  read(clientSocket, buffer, sizeof(buffer) - 1);

  // Respond with a simple HTTP response
  string response = "HTTP/1.1 200 OK\r\n"
                    "Content-Type: text/plain\r\n"
                    "Connection: close\r\n"
                    "\r\n"
                    "Hello, World!\nI made an HTTP Server from scratch in C++.\r\n";

  write(clientSocket, response.c_str(), response.size());
}

int main() {
  // Create a socket
  int serverSocket = socket(AF_INET, SOCK_STREAM, 0);
  if (serverSocket == -1) {
    perror("Error creating socket");
    return 1;
  }

  // Bind the socket to an address and port
  sockaddr_in serverAddress{};
  serverAddress.sin_family = AF_INET;
  serverAddress.sin_addr.s_addr = INADDR_ANY;
  serverAddress.sin_port = htons(PORT);

  if (bind(serverSocket, reinterpret_cast<sockaddr *>(&serverAddress),
           sizeof(serverAddress)) == -1) {
    perror("Error binding socket");
    return 1;
  }

  // Listen for incoming connections
  if (listen(serverSocket, 10) == -1) {
    perror("Error listening for connections");
    return 1;
  }

  cout << "Server listening on port " << PORT << endl;

  while (true) {
    // Accept incoming connections
    sockaddr_in clientAddress{};
    socklen_t clientAddressSize = sizeof(clientAddress);
    int clientSocket =
        accept(serverSocket, reinterpret_cast<sockaddr *>(&clientAddress),
               &clientAddressSize);

    if (clientSocket == -1) {
      perror("Error accepting connection");
      continue;
    }

    // Handle the incoming HTTP request
    handleRequest(clientSocket);

    // Close the client socket
    close(clientSocket);
  }

  // Close the server socket
  close(serverSocket);

  return 0;
}
