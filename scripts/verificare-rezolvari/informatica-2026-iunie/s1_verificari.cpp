// Verifică itemii de grilă din Subiectul I (Informatică 2026, iunie, Varianta 4, mate-info).
#include <bits/stdc++.h>
using namespace std;
int f(int n,int m){ if(n>=m) return 0; else return 1+f(n+1,m-2); }
int main(){
  // I.1
  printf("I1 a=%d b=%d c=%d d=%d\n",(2026-26)/100,2026/100,(2026-26)%100,2026%100);
  // I.2
  printf("I2 f(1,10)=%d\n",f(1,10));
  // I.3 produs cartezian în ordine lexicografică
  vector<string> A={"Dubova","Eselnita","Svinita"},B={"Busteni","Paltinis","Predeal"},C={"Venus","Neptun","Olimp"};
  vector<string> all;
  for(auto&a:A)for(auto&b:B)for(auto&c:C) all.push_back(a+","+b+","+c);
  for(size_t i=0;i<all.size();i++) if(all[i]=="Svinita,Busteni,Venus") printf("I3 inainte: %s\n",all[i-1].c_str());
  // I.4 matricea de adiacență
  int M[5][5]={{0},{0,0,1,1,0},{0,1,0,1,0},{0,0,0,0,1},{0,1,1,0,0}};
  vector<vector<int>> opt={{1,2,1,3,4,1},{1,2,3,4},{1,3,4,2,1},{1,4,3,2,1}};
  for(int k=0;k<4;k++){ auto&v=opt[k]; bool ok=v.front()==v.back();
    for(size_t i=0;i+1<v.size();i++) ok&=M[v[i]][v[i+1]]==1;
    set<int> s(v.begin(),v.end()-1); ok&=s.size()==v.size()-1; // elementar
    printf("I4 %c circuit elementar: %s\n",'a'+k,ok?"DA":"NU"); }
  // I.5 forță brută: împărțiri în 3 componente conexe de câte 4 noduri
  vector<pair<int,int>> E={{1,2},{1,3},{2,3},{2,4},{3,5},{4,5},{4,6},{5,6},{6,7},{7,8},{7,9},{8,9},{9,10},{10,11},{10,12},{11,12}};
  int best=1e9; vector<int> col(13);
  function<bool(int)> conex=[&](int c){ vector<int> v; for(int i=1;i<=12;i++) if(col[i]==c) v.push_back(i);
    set<int> seen={v[0]}; queue<int> q; q.push(v[0]);
    while(!q.empty()){int x=q.front();q.pop(); for(auto&e:E){int y=-1; if(e.first==x)y=e.second; else if(e.second==x)y=e.first;
      if(y>0&&col[y]==c&&!seen.count(y)){seen.insert(y);q.push(y);}}}
    return seen.size()==v.size(); };
  for(int mask=0;mask<531441;mask++){ int x=mask,cnt[3]={0,0,0};
    for(int i=1;i<=12;i++){col[i]=x%3;x/=3;cnt[col[i]]++;}
    if(cnt[0]!=4||cnt[1]!=4||cnt[2]!=4) continue;
    if(!conex(0)||!conex(1)||!conex(2)) continue;
    int rem=0; for(auto&e:E) if(col[e.first]!=col[e.second]) rem++;
    best=min(best,rem); }
  printf("I5 minim muchii eliminate=%d\n",best);
  // II.2
  char s[21],t[21]; strcpy(s,"anatoliana"); strcpy(t,"ana");
  printf("II2 %d ",(int)strlen(s)); printf(strstr(s,t)==s?"DA ":"NU ");
  printf(strcmp(strstr(s+1,t),t)==0?"DA\n":"NU\n");
}
