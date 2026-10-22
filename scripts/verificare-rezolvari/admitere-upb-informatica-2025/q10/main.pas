program Program1;
var f: text; sir: string;
i: Integer;
begin
  assign(f, 'main.pas');
  reset(f);
  i := 0;
  while i<7 do begin
    readln(f, sir);
    inc(i);
  end;
  close(f);
  writeln(sir);
end.
