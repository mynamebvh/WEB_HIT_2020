#include <iostream>
using namespace std;

int dequy(int n){
  if (n == 0)
    return 0;
  
  return dequy(n / 10) + 1;

}
int main(){

  int n = -88586;

  cout << dequy(n);
  return 0;
}