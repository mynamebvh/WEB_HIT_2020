#include <iostream>
using namespace std;

int sum (int a, int b){
  int sum = 0;
  for(int i = a; i <= b; i++){
    if(i % 3 == 0 & i % 5 == 0)
      sum += i;
  }
  return sum;
}
int main(){
  cout << "sum = " << sum(1,30);
  return 0;
}