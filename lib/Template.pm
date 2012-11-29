package Template;

sub new {
    my $class = shift;
    my $self = {
        templateFile => shift,
        templateText => ""
    };
    open(IN, "<".$self->{templateFile});
    while (my $line = <IN>) {
        $self->{templateText} .= $line;
    }
    close(IN);
    bless $self, $class;
    return $self;
}

sub render {
    my ($self, $hr) = @_;
    my $output = $self->{templateText};
    foreach my $key (keys(%{$hr})) {
        $output =~ s/{{$key}}/$hr->{$key}/g;
    }
    $output =~ s/{{.*}}//g;
    return $output;
}

sub file_contents {
    my $file = shift;
    my $contents = "";
    open(IN, "<$file");
    while (my $line = <IN>) {
        $contents .= $line;
    }
    close(IN);
    return $contents;
}

1;
